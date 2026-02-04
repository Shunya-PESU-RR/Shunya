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
    <nav className="fixed top-0 left-0 bottom-0 w-64 surface border-r z-50 flex flex-col transition-colors duration-300">
      
      <div className="p-8">
        <Link to="/" className="text-3xl font-bold tracking-tight">
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
                  ? "bg-[var(--accent)] text-[var(--accent-on)]"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-6 border-t">
        <button
          onClick={toggleTheme}
          className="w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
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
