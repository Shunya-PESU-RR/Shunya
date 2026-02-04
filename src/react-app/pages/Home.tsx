import { Link } from "react-router";
import Cubes from "../components/Cubes";
import DecryptedText from "../components/DecryptedText";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  return (
    
    <div className="page relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="hero-section relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center decrypt-parent">
          
          <h1
            className="text-7xl font-bold mb-6 tracking-tight cursor-default"
            style={{ color: "var(--accent)" }}
          >
            <DecryptedText
              text="SHUNYA"
              animateOn="hover"
              parentClassName="decrypt-parent"
              speed={140}
              maxIterations={30}
              useOriginalCharsOnly
            />
          </h1>

          <p className="text-xl muted mb-12 max-w-2xl mx-auto leading-relaxed">
            A space for mathematics, logic, and exploration
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/events" className="px-8 py-3 btn-primary rounded-md font-bold">
              Explore Events
            </Link>

            <Link to="/people" className="px-8 py-3 btn-outline rounded-md font-bold">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center py-8">
          <p className="text-lg muted leading-relaxed">
            Shunya is the official, research-oriented mathematics club at PES University,
            Bengaluru, founded on December 14, 2021. It aims to promote mathematical
            literacy, analytical thinking, and applied math, offering activities like
            workshops, puzzles, and its signature math-based hackathon, Arithemania.
          </p>
        </div>
        
      <section className="relative py-20 px-5">
        <div className="relative h-[40vh] flex items-center justify-center">
        <div className="w-[420px] max-w-full">
          <Cubes
            gridSize={6}
            maxAngle={35}
            radius={4}
            borderStyle="1px dashed #6A8DFF"
            faceColor="#0b1020"
            rippleColor="#6A8DFF"
            rippleSpeed={0.6}
            autoAnimate
            rippleOnClick={false}
          />
        </div>
      </div>

      </section>

    </div>
  );
}
