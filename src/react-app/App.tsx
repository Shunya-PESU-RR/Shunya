import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { AnimatePresence, MotionConfig } from "motion/react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import PeoplePage from "./pages/People";
import AboutPage from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>

        <AnimatePresence>
          {isLoading && (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>
      </MotionConfig>
    </ThemeProvider>
  );
}
