import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Home, Calendar, Users, Info, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "People", path: "/people", icon: Users },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
      >
        <div className="glass-panel rounded-full p-2 px-6 flex items-center gap-2 shadow-2xl shadow-blue-900/10">
          {/* Brand */}
          <Link to="/" className="mr-6 font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="text-gradient">SHUNYA</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 group ${
                    isActive
                      ? "text-[#0070f3] dark:text-[#0070f3] bg-[#0070f3]/10"
                      : "text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-[#0070f3]/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-400 hover:text-[#0070f3] dark:hover:text-[#0070f3]"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <div className="glass-panel rounded-2xl p-3 flex items-center justify-between shadow-2xl shadow-blue-900/10">
          {/* Brand */}
          <Link to="/" className="font-bold text-lg tracking-tighter">
            <span className="text-gradient">SHUNYA</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-400"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-400"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden"
          >
            <div className="glass-panel rounded-2xl p-4 shadow-2xl shadow-blue-900/10">
              <div className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`relative px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                        isActive
                          ? "text-[#0070f3] dark:text-[#0070f3] bg-[#0070f3]/10"
                          : "text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
