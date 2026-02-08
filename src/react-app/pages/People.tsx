import PageLayout from "../components/PageLayout";
import TeamMemberCard from "../components/TeamMemberCard";
import { motion } from "motion/react";

export default function People() {
  const coreTeam = [
    {
      name: "Noel Jose",
      role: "Club Head",
      image: "https://github.com/NJWasTaken.png",
      socials: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "C Kaustubh",
      role: "Technical Head",
      image: "https://github.com/snigenigmatic.png",
      socials: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "Roshan",
      role: "Vice Head",
      image: "https://ui-avatars.com/api/?name=Roshan&background=0D8ABC&color=fff",
      socials: { github: "#", linkedin: "#" }
    },
    // Add more core members here
  ];

  const members = [
    {
      name: "Member Name",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Name&background=random",
      socials: { github: "#" }
    },
    {
      name: "Member Name",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Name&background=random",
      socials: { github: "#" }
    },
    {
      name: "Member Name",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Name&background=random",
      socials: { github: "#" }
    },
    {
      name: "Member Name",
      role: "Core Team",
      image: "https://ui-avatars.com/api/?name=Member+Name&background=random",
      socials: { github: "#" }
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">The Team</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            The minds behind Shunya. We are a collective of passionate students driving mathematical exploration on campus.
          </p>
        </motion.div>

        {/* Core Team */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Core Committee</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Members */}
        <section>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-xl font-bold uppercase tracking-widest text-muted opacity-70">Members</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}