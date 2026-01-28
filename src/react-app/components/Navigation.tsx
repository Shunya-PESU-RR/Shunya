import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "People", path: "/people" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-50 flex flex-col transition-colors duration-300">
      <div className="p-8">
        <Link
          to="/"
          className="text-3xl font-bold text-[#4F7FFF] tracking-tight"
        >
          SHUNYA
        </Link>
      </div>

      <div className="flex-1 px-6 py-4">
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                location.pathname === link.path
                  ? "bg-[#4F7FFF] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <button
          onClick={toggleTheme}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <>
              <Moon className="w-5 h-5" />
              <span className="font-semibold">Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="w-5 h-5" />
              <span className="font-semibold">Light Mode</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
