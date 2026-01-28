import { Link } from "react-router";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-40 pb-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-[#4F7FFF] dark:text-[#6A8DFF] mb-6 tracking-tight">
            SHUNYA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A space for mathematics, logic, and exploration
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/events"
              className="px-8 py-3 bg-[#7A6CFF] text-white rounded-md font-bold hover:bg-[#9B8CFF] transition-colors duration-300"
            >
              Explore Events
            </Link>
            <Link
              to="/people"
              className="px-8 py-3 border-2 border-[#4F7FFF] dark:border-[#6A8DFF] text-[#4F7FFF] dark:text-[#6A8DFF] rounded-md font-bold hover:bg-[#4F7FFF] dark:hover:bg-[#6A8DFF] hover:text-white transition-colors duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-12 px-5 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Shunya is the official, research-oriented mathematics club at PES University, Bengaluru, founded on December 14, 2021. It aims to promote mathematical literacy, analytical thinking, and applied math, offering activities like workshops, puzzles, and its signature math-based hackathon, Arithemania.
          </p>
        </div>
      </section>
    </div>
  );
}