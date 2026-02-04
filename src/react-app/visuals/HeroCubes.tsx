import Cubes from "../components/Cubes";

export default function HeroCubes() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
      <Cubes
        gridSize={100}
        maxAngle={30}
        radius={3}
        borderStyle="1px dashed #6f85ff"
        faceColor="#0b1020"
        rippleColor="#6f85ff"
        rippleSpeed={0.1}
        autoAnimate
      />
    </div>
  );
}
