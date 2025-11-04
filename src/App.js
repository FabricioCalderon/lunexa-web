import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";

import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import InstagramButton from "./components/InstagramButton";
import Clientes from "./pages/Clientes";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* SEO Global */}
      <Helmet>
        <title>Lunexa | Desarrollo de Software y Soluciones Digitales</title>
        <meta
          name="description"
          content="Lunexa ofrece desarrollo de software, sistemas web y soluciones digitales personalizadas para empresas y emprendedores."
        />
        <meta
          name="keywords"
          content="Lunexa, desarrollo de software, páginas web, sistemas, apps, soluciones tecnológicas, programación, tecnología, Argentina"
        />
        <meta property="og:title" content="Lunexa | Software a Medida" />
        <meta
          property="og:description"
          content="Transformamos tus ideas en sistemas inteligentes. Desarrollamos software a medida con tecnología moderna."
        />
        <meta property="og:image" content="https://lunexa.vercel.app/lunexa.png" />
        <meta property="og:url" content="https://lunexa.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
