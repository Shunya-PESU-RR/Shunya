import PageLayout from "../components/PageLayout";
import ReflectiveCard from "../components/ReflectiveCard";
import { motion } from "motion/react";

export default function People() {
  const coreTeam = [
    {
      name: "Noel Jose",
      role: "Club Head",
      image: "https://github.com/NJWasTaken.png",
      id: "SH-2024-001"
    },
    {
      name: "C Kaustubh",
      role: "Technical Head",
      image: "https://github.com/snigenigmatic.png",
      id: "SH-2024-002"
    },
    {
      name: "Roshan",
      role: "Vice Head",
      image: "https://ui-avatars.com/api/?name=Roshan&background=0D8ABC&color=fff&size=400",
      id: "SH-2024-003"
    }
  ];

  const members = [
    {
      name: "Member One",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+One&background=0070f3&color=fff&size=400",
      id: "SH-2024-101"
    },
    {
      name: "Member Two",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Two&background=7928ca&color=fff&size=400",
      id: "SH-2024-102"
    },
    {
      name: "Member Three",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Three&background=0070f3&color=fff&size=400",
      id: "SH-2024-103"
    },
    {
      name: "Member Four",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Four&background=7928ca&color=fff&size=400",
      id: "SH-2024-104"
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">The Team</span></h1>
          <p className="text-xl text-muted max-w-2xl">
            The minds behind Shunya. We are a collective of passionate students driving mathematical exploration on campus.
          </p>
        </motion.div>

        {/* Core Team */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Core Committee</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ReflectiveCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  id={member.id}
                  overlayColor="rgba(0, 0, 0, 0.2)"
                  blurStrength={12}
                  glassDistortion={30}
                  metalness={1}
                  roughness={0.75}
                  displacementStrength={20}
                  noiseScale={1}
                  specularConstant={5}
                  grayscale={0.15}
                  color="#ffffff"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Members */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted opacity-70">Members</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <ReflectiveCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  id={member.id}
                  overlayColor="rgba(0, 0, 0, 0.2)"
                  blurStrength={12}
                  glassDistortion={30}
                  metalness={1}
                  roughness={0.75}
                  displacementStrength={20}
                  noiseScale={1}
                  specularConstant={5}
                  grayscale={0.15}
                  color="#ffffff"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}