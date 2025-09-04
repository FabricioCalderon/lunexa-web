import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // para compatibilidad con routing
import AOS from "aos";
import "aos/dist/aos.css";

import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import InstagramButton from "./components/InstagramButton";
import Clientes from "./pages/Clientes";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animación de 1s y solo una vez
  }, []);

  return (
    <Router>
      <StarBackground />
      <Navbar />
      <Home />
      <Services />
      <About />
      <Benefits />
      <Clientes />
      <Contact />
      <InstagramButton />
      <Footer />
    </Router>
  );
}

export default App;
