import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logolunexa1 from "../assets/logolunexa1.png"; 
import { useTranslation } from "react-i18next";

function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home"); // sección activa
  const { t } = useTranslation();

  const sections = ["home", "services", "about", "benefits","clientes", "contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // cierra menú en móvil
  };

  // Detecta la sección visible para marcar el link activo
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + 100; // compensación por navbar fijo
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) { 
            setActive(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [sections]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo-container" onClick={() => handleScroll("home")}>
        <img src={logolunexa1} alt="Lunexa" className="logo" />
      </div>

      {/* LINKS */}
      <div className="nav-links-wrapper">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => handleScroll(sec)}
                className={active === sec ? "active" : ""}
              >
                {sec === "home" ? t("home", "Inicio") :
                 sec === "services" ? t("services", "Servicios") :
                 sec === "about" ? t("about", "Quiénes Somos") :
                 sec === "benefits" ? t("beneficios.titulo", "Beneficios") :
                 sec === "clientes" ? t("clientes", "Clientes") :
                 t("contact", "Contacto")}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* HAMBURGUESA */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
