import DecryptedText from "../components/DecryptedText";

export default function HeroTitle() {
  return (
    <h1 className="hero-title text-6xl font-semibold tracking-wide text-blue-400 cursor-default">
      <DecryptedText
        text="SHUNYA"
        animateOn="hover"
        parentClassName="hero-title"
        speed={120}
        maxIterations={30}
        useOriginalCharsOnly
      />
    </h1>
  );
}
