import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.png";
import "../styles/style.css"; // 📌 importamos el CSS

function About() {
  return (
    <>
      {/* SECCION SOBRE NOSOTROS */}
      <section id="about" className="about-section">
        <h2 className="about-title">Sobre Nosotros</h2>

        <p className="about-text">
          En <strong>Lunexa</strong> desarrollamos páginas web, tiendas online,
          landing pages y software de administración a medida.  
          Creamos soluciones tecnológicas{" "}
          <strong>eficientes, escalables y fáciles de usar</strong> para que tu
          negocio crezca y destaque.
        </p>

        {/* CAJAS DE ENFOQUES Y OBJETIVOS */}
        <div className="about-grid">
          {[
            {
              title: "Innovación",
              text: "Buscamos siempre implementar soluciones modernas y efectivas.",
            },
            {
              title: "Escalabilidad",
              text: "Diseñamos sistemas que crecen junto a tu negocio.",
            },
            {
              title: "Experiencia de Usuario",
              text: "Creamos interfaces claras y fáciles de usar.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="about-card"
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCION PREGUNTA FINAL */}
      <section className="about-cta">
        <div className="cta-text">
          <h2>
            ¿Qué esperas para llegar a más personas y conseguir mejores
            resultados?
          </h2>
          <p>
            En <strong>Lunexa</strong> vas a contar con el diseño web y el
            software que siempre soñaste.
          </p>
        </div>

        <motion.img
          src={Aboutimg}
          alt="Tecnología"
          className="cta-img"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.a
          href="https://www.instagram.com/lunexasoft"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.12,
            boxShadow: [
              "0 0 25px rgba(255, 60, 172, 0.6)",
              "0 0 40px rgba(255, 60, 172, 0.9)",
              "0 0 25px rgba(255, 60, 172, 0.6)",
            ],
            transition: { duration: 1.5, repeat: Infinity },
          }}
          animate={{
            y: [0, -5, 0],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
              y: { repeat: Infinity, duration: 2 },
              backgroundPosition: { repeat: Infinity, duration: 6, ease: "linear" },
            },
          }}
        >
          ¡Más Información!
        </motion.a>
      </section>
    </>
  );
}

export default About;
