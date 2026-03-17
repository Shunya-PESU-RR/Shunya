import PageLayout from "../components/PageLayout";
import ReflectiveCard from "../components/ReflectiveCard";
import { motion } from "motion/react";

export default function People() {
  const coreTeam = [
    {
      name: "Noel Jose",
      role: "Club Head",
      image: "/team_pics/Noel_Club_Head.png",
      id: "SH-2025-001"
    },
    {
      name: "Lakshya",
      role: "Deputy Club Head",
      image: "/team_pics/Lakshya_Deputy_Head.jpg",
      id: "SH-2025-002"
    },
    {
      name: "Pranav",
      role: "Deputy Club Head",
      image: "/team_pics/Pranav_Deputy_Head.jpeg",
      id: "SH-2025-003"
    },
    {
      name: "Khushi",
      role: "Club Mentor",
      image: "/team_pics/Khushi-mentor.JPG",
      id: "SH-2025-004"
    },
    {
      name: "Pragathi",
      role: "Event Management Head",
      image: "/team_pics/Pragathi_EVM.jpeg",
      id: "SH-2025-005"
    },
    {
      name: "C Kaustubh",
      role: "Technical Head",
      image: "/team_pics/Kaustubh_Tech.jpeg",
      id: "SH-2025-006"
    },
    {
      name: "Dibya",
      role: "Logistics Head",
      image: "/team_pics/Dibya_Logs.jpeg",
      id: "SH-2025-007"
    },
    {
      name: "Janhavi",
      role: "Math Head",
      image: "/team_pics/Janhavi_math.jpeg",
      id: "SH-2025-008"
    },
    {
      name: "Madhu",
      role: "Math Head",
      image: "/team_pics/Madhu_math.jpeg",
      id: "SH-2025-009"
    },
    {
      name: "Nandani",
      role: "Operations Head",
      image: "/team_pics/Nandani_OPS.jpg",
      id: "SH-2025-010"
    },
    {
      name: "Nirav",
      role: "Marketing and Sponsorship Head",
      image: "/team_pics/Nirav_MNS.jpg",
      id: "SH-2025-011"
    },
    {
      name: "Nishita",
      role: "Design Head",
      image: "/team_pics/Nishita_Design.jpg",
      id: "SH-2025-012"
    },
    {
      name: "Paranshu",
      role: "PR & Campaigning Head",
      image: "/team_pics/Paranshu_PRC.jpg",
      id: "SH-2025-013"
    },
    {
      name: "Lakshya Budhauliya",
      role: "PR & Campaigning Head",
      image: "/team_pics/Lakshya_Budhauliya_PRC.jpeg",
      id: "SH-2025-014"
    },
    {
      name: "Pavan",
      role: "Hospitality Head",
      image: "/team_pics/Pavan_Hospi.webp",
      id: "SH-2025-015"
    },
    {
      name: "Alisha",
      role: "Hospitality Head",
      image: "/team_pics/Alisha-hospi.jpeg",
      id: "SH-2025-016"
    },
    
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

        {/* Core Committee */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Core Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReflectiveCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  id={member.id}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}