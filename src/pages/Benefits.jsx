import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaUsers, FaThumbsUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Benefits() {
  const { t } = useTranslation();

  const beneficios = [
    {
      titulo: t("beneficios.impulso", "Impulsa tu marca"),
      icono: <FaRocket size={50} />,
      descripcion: t("beneficios.impulsoDesc", "Haz que tu negocio destaque en internet y llegue a más clientes."),
      color: "#6C5CE7"
    },
    {
      titulo: t("beneficios.seguridad", "Seguridad garantizada"),
      icono: <FaShieldAlt size={50} />,
      descripcion: t("beneficios.seguridadDesc", "Protección de datos y tecnologías actualizadas para tu tranquilidad."),
      color: "#00B894"
    },
    {
      titulo: t("beneficios.soporte", "Soporte cercano"),
      icono: <FaUsers size={50} />,
      descripcion: t("beneficios.soporteDesc", "Estamos a tu lado en todo momento para ayudarte a crecer."),
      color: "#FD79A8"
    },
    {
      titulo: t("beneficios.resultados", "Resultados reales"),
      icono: <FaThumbsUp size={50} />,
      descripcion: t("beneficios.resultadosDesc", "Soluciones prácticas que generan impacto en tu negocio."),
      color: "#0984E3"
    }
  ];

  return (
    <section id="benefits" style={{ padding: "60px 20px", color: "white", textAlign: "center" }}>
      <motion.h2
        style={{ marginBottom: "50px", fontSize: "3rem" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {t("beneficios.titulo", "Beneficios de elegirnos")}
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px", justifyItems: "center" }}>
        {beneficios.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, boxShadow: `0 10px 25px ${b.color}` }}
            style={{
              background: `linear-gradient(135deg, ${b.color}80, ${b.color}40)`,
              borderRadius: "20px",
              padding: "25px",
              width: "80%",
              maxWidth: "185px",
              textAlign: "center",
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              style={{ marginBottom: "20px" }}
            >
              {b.icono}
            </motion.div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{b.titulo}</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{b.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {/* <motion.a
        href="https://www.instagram.com/lunexasoft"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        style={{
          display: "inline-block",
          marginTop: "50px",
          backgroundColor: "#60A5FA",
          color: "white",
          textDecoration: "none",
          padding: "14px 32px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        💬 {t("beneficios.contacto", "Contacto")}
      </motion.a> */}
    </section>
  );
}

export default Benefits;
