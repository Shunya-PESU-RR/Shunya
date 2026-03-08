import { useEffect, useState } from 'react';
import Cubes from '../components/Cubes';

export default function CubesScene() {
  const [gridSize, setGridSize] = useState(8);

  useEffect(() => {
    const updateGridSize = () => {
      if (window.innerWidth < 640) {
        setGridSize(6); // Smaller grid for mobile
      } else if (window.innerWidth < 1024) {
        setGridSize(7); // Medium grid for tablets
      } else {
        setGridSize(8); // Full grid for desktop
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Cubes
        gridSize={gridSize}
        maxAngle={45}
        radius={3}
        borderStyle="1px solid rgba(0, 112, 243, 0.2)"
        faceColor="rgba(255, 255, 255, 0.03)"
        rippleColor="#0070f3"
        rippleSpeed={1.5}
        autoAnimate={false}
        rippleOnClick={true}
      />
    </div>
  );
}
