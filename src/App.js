import { useEffect } from "react";
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
import "./index.css"; // o App.css, según donde estén los estilos globales

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animación de 1s y solo una vez
  }, []);

  return (
    <>
      <StarBackground />
      <Navbar />
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="benefits"><Benefits /></section>
      <section id="clientes"><Clientes /></section>
      <section id="contact"><Contact /></section>
      <InstagramButton />
      <Footer />
    </>
  );
}

export default App;
