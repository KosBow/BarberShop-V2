import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NavBar } from "./components/nav/NavBar";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <div className="bg-black min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/kontakt"
              element={
                <GoogleReCaptchaProvider reCaptchaKey="6LcIIAgsAAAAACzvk3O5rNZ34huZd0OOzhLO8PGF">
                  <Contact />
                </GoogleReCaptchaProvider>
              }
            />
            <Route path="/om-oss" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
