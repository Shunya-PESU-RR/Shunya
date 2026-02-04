import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

// Constants
const DEFAULT_GRID_SIZE = 10;
const DEFAULT_MAX_ANGLE = 45;
const DEFAULT_RADIUS = 3;
const DEFAULT_EASING = 'power3.out';
const DEFAULT_DURATION_ENTER = 0.3;
const DEFAULT_DURATION_LEAVE = 0.6;
const DEFAULT_BORDER_STYLE = '1px solid #fff';
const DEFAULT_FACE_COLOR = '#060010';
const DEFAULT_RIPPLE_COLOR = '#fff';
const DEFAULT_RIPPLE_SPEED = 2;
const DEFAULT_CELL_GAP = '5%';

// Animation constants
const AUTO_ANIMATE_SPEED = 0.02;
const IDLE_TIMEOUT_MS = 3000;
const RIPPLE_BASE_RING_DELAY = 0.15;
const RIPPLE_BASE_ANIM_DURATION = 0.3;
const RIPPLE_BASE_HOLD_TIME = 0.6;

interface Gap {
  row: number;
  col: number;
}

interface Duration {
  enter: number;
  leave: number;
}

export interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: gsap.EaseString;
  duration?: Duration;
  cellGap?: number | Gap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
  attachPointerToParent?: boolean;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = DEFAULT_GRID_SIZE,
  cubeSize,
  maxAngle = DEFAULT_MAX_ANGLE,
  radius = DEFAULT_RADIUS,
  easing = DEFAULT_EASING,
  duration = { enter: DEFAULT_DURATION_ENTER, leave: DEFAULT_DURATION_LEAVE },
  cellGap,
  borderStyle = DEFAULT_BORDER_STYLE,
  faceColor = DEFAULT_FACE_COLOR,
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = DEFAULT_RIPPLE_COLOR,
  rippleSpeed = DEFAULT_RIPPLE_SPEED,
  attachPointerToParent = false,
}) => {
  // Refs for DOM and animation
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userActiveRef = useRef(false);
  
  // Auto-animation refs
  const autoAnimPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const autoAnimTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const autoAnimRAFRef = useRef<number | null>(null);

  // Calculate gap values
  const colGap =
    typeof cellGap === 'number'
      ? `${cellGap}px`
      : (cellGap as Gap)?.col !== undefined
        ? `${(cellGap as Gap).col}px`
        : DEFAULT_CELL_GAP;
  const rowGap =
    typeof cellGap === 'number'
      ? `${cellGap}px`
      : (cellGap as Gap)?.row !== undefined
        ? `${(cellGap as Gap).row}px`
        : DEFAULT_CELL_GAP;

  const enterDuration = duration.enter;
  const leaveDuration = duration.leave;

  /**
   * Tilts cubes at a specific row and column center
   */
  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const row = +cube.dataset.row!;
        const col = +cube.dataset.col!;
        const distance = Math.hypot(row - rowCenter, col - colCenter);
        
        if (distance <= radius) {
          // Cube is within the radius - apply tilt
          const percentage = 1 - distance / radius;
          const angle = percentage * maxAngle;
          gsap.to(cube, {
            duration: enterDuration,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle,
          });
        } else {
          // Cube is outside the radius - reset to flat
          gsap.to(cube, {
            duration: leaveDuration,
            ease: DEFAULT_EASING,
            overwrite: true,
            rotateX: 0,
            rotateY: 0,
          });
        }
      });
    },
    [radius, maxAngle, enterDuration, leaveDuration, easing]
  );

  /**
   * Resets all cubes to their default flat state
   */
  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    
    sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube =>
      gsap.to(cube, {
        duration: leaveDuration,
        rotateX: 0,
        rotateY: 0,
        ease: DEFAULT_EASING,
      })
    );
  }, [leaveDuration]);

  /**
   * Handles pointer move events
   */
  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellWidth = rect.width / gridSize;
      const cellHeight = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellWidth;
      const rowCenter = (e.clientY - rect.top) / cellHeight;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      // Set idle timeout
      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, IDLE_TIMEOUT_MS);
    },
    [gridSize, tiltAt]
  );

  /**
   * Handles touch move events
   */
  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellWidth = rect.width / gridSize;
      const cellHeight = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellWidth;
      const rowCenter = (touch.clientY - rect.top) / cellHeight;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      // Set idle timeout
      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, IDLE_TIMEOUT_MS);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  /**
   * Handles click events with ripple animation
   */
  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      
      const rect = sceneRef.current.getBoundingClientRect();
      const cellWidth = rect.width / gridSize;
      const cellHeight = rect.height / gridSize;

      // Get click coordinates
      const clientX = (e as MouseEvent).clientX || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
      const clientY = (e as MouseEvent).clientY || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellWidth);
      const rowHit = Math.floor((clientY - rect.top) / cellHeight);

      // Calculate ripple timing based on speed
      const spreadDelay = RIPPLE_BASE_RING_DELAY / rippleSpeed;
      const animDuration = RIPPLE_BASE_ANIM_DURATION / rippleSpeed;
      const holdTime = RIPPLE_BASE_HOLD_TIME / rippleSpeed;

      // Group cubes by distance (ring) from click point
      const rings: Record<number, HTMLDivElement[]> = {};
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const row = +cube.dataset.row!;
        const col = +cube.dataset.col!;
        const distance = Math.hypot(row - rowHit, col - colHit);
        const ring = Math.round(distance);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      // Animate each ring with appropriate delay
      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => 
            Array.from(cube.querySelectorAll<HTMLElement>('.cube-face'))
          );

          // Animate to ripple color
          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: DEFAULT_EASING,
          });
          
          // Animate back to original color
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: DEFAULT_EASING,
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  /**
   * Auto-animation effect - moves the tilt center autonomously
   */
  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;

    // Initialize random positions
    autoAnimPositionRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };
    autoAnimTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize,
    };

    const loop = () => {
      if (!userActiveRef.current) {
        const pos = autoAnimPositionRef.current;
        const target = autoAnimTargetRef.current;
        
        // Smoothly interpolate towards target
        pos.x += (target.x - pos.x) * AUTO_ANIMATE_SPEED;
        pos.y += (target.y - pos.y) * AUTO_ANIMATE_SPEED;
        
        tiltAt(pos.y, pos.x);
        
        // When close to target, pick a new random target
        if (Math.hypot(pos.x - target.x, pos.y - target.y) < 0.1) {
          autoAnimTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize,
          };
        }
      }
      autoAnimRAFRef.current = requestAnimationFrame(loop);
    };

    autoAnimRAFRef.current = requestAnimationFrame(loop);

    return () => {
      if (autoAnimRAFRef.current != null) {
        cancelAnimationFrame(autoAnimRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  /**
   * Event listeners effect
   */
  useEffect(() => {
    const targetEl = (() => {
      if (!sceneRef.current) return null;
      if (!attachPointerToParent) return sceneRef.current;

      // Use grandparent element if available for better pointer event capture
      const parent = sceneRef.current.parentElement;
      const grandparent = parent?.parentElement;
      return (grandparent as HTMLElement) || (parent as HTMLElement) || sceneRef.current;
    })();

    if (!targetEl) return;

    // Add event listeners
    targetEl.addEventListener('pointermove', onPointerMove);
    targetEl.addEventListener('pointerleave', resetAll);
    targetEl.addEventListener('click', onClick);
    targetEl.addEventListener('touchmove', onTouchMove, { passive: false });
    targetEl.addEventListener('touchstart', onTouchStart, { passive: true });
    targetEl.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      // Cleanup event listeners
      targetEl.removeEventListener('pointermove', onPointerMove);
      targetEl.removeEventListener('pointerleave', resetAll);
      targetEl.removeEventListener('click', onClick);
      targetEl.removeEventListener('touchmove', onTouchMove);
      targetEl.removeEventListener('touchstart', onTouchStart);
      targetEl.removeEventListener('touchend', onTouchEnd);

      // Cleanup animation frames and timers
      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd, attachPointerToParent]);

  // Generate grid cells
  const cells = Array.from({ length: gridSize });

  // Styles
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`,
    columnGap: colGap,
    rowGap: rowGap,
  };

  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: `${gridSize * cubeSize}px`,
          height: `${gridSize * cubeSize}px`,
        }
      : {}),
  } as React.CSSProperties;

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div ref={sceneRef} className="default-animation--scene" style={sceneStyle}>
        {cells.map((_, row) =>
          cells.map((__, col) => (
            <div key={`${row}-${col}`} className="cube" data-row={row} data-col={col}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
