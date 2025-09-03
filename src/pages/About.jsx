import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../assets/Aboutimg.png";

function About() {
  return (
    <>
      {/* SECCION SOBRE NOSOTROS */}
      <section
        id="about"
        style={{
          padding: "60px 20px",
          background: "rgba(58,0,102,0.7)",
          borderRadius: "20px",
          margin: "20px",
          // boxShadow: "0 0 20px #60A5FA",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "white",
            textShadow: "0 0 8px rgba(255,255,255,0.5)",
            marginBottom: "30px",
            
          }}
        >
          Sobre Nosotros
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            marginTop: "20px",
            maxWidth: "650px",
            lineHeight: "1.6",
            color: "white",
          }}
        >
          En <strong>Lunexa</strong> desarrollamos páginas web, tiendas online,
          landing pages y software de administración a medida.  
          Creamos soluciones tecnológicas{" "}
          <strong>eficientes, escalables y fáciles de usar</strong> para que tu
          negocio crezca y destaque.
        </p>

        {/* CAJAS DE ENFOQUES Y OBJETIVOS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
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
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                textAlign: "center",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "1rem" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECCION PREGUNTA FINAL */}
      <section
        style={{
          padding: "60px 20px",
          margin: "20px 0",
          background: "linear-gradient(135deg, #1A0033 0%, #3A0066 40%, #4B0082 70%, #60A5FA 100%)",
          color: "white",
          textAlign: "center",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* TEXTO */}
        <div style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            ¿Qué esperas para llegar a más personas y conseguir mejores
            resultados?
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            En <strong>Lunexa</strong> vas a contar con el diseño web y el
            software que siempre soñaste.
          </p> 
        </div>

        {/* IMAGEN */}
        <motion.img
          src={Aboutimg}
          alt="Tecnología"
          style={{ width: "300px", borderRadius: "15px" }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.a
          href="https://www.instagram.com/lunexasoft"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}   // efecto entrada
          whileInView={{ opacity: 1, scale: 1, y: 0 }}  // aparece con zoom + subida
          viewport={{ once: false }}
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
            y: [0, -5, 0], // flotación
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // gradiente animado
            transition: {
              y: { repeat: Infinity, duration: 2 },
              backgroundPosition: { repeat: Infinity, duration: 6, ease: "linear" },
            },
          }}
          style={{
            display: "inline-block",
            marginTop: "30px",
            background: "linear-gradient(135deg, #9B5DE5, #FF3CAC)", // gradiente invertido
            backgroundSize: "200% 200%",
            color: "white",
            textDecoration: "none",
            padding: "16px 36px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(255, 60, 172, 0.6)",
          }}
        >
           ¡Más Informacion!
        </motion.a>
      </section>
    </>
  );
}

export default About;
