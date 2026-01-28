import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import PeoplePage from "./pages/People";
import AboutPage from "./pages/About";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen">
          <Navigation />
          <div className="flex-1 ml-64 flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
