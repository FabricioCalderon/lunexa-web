import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLaptopCode, FaCogs, FaShoppingCart, FaTools } from "react-icons/fa";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      icon: <FaLaptopCode size={40} />,
      text: "Creamos sitios web modernos, rápidos y adaptados a tus necesidades.",
      details: [
        "Diseño moderno y profesional.",
        "Optimización SEO para aparecer en Google.",
        "100% adaptable a celulares y tablets.",
        "Carga rápida y segura.",
        "Escalable para crecer con tu negocio.",
      ],
      promo: "30% OFF",
    },
    {
      id: 2,
      title: "Automatización",
      icon: <FaCogs size={40} />,
      text: "Optimizamos tus procesos con software a medida.",
      details: [
        "Automatización de tareas repetitivas.",
        "Ahorro de tiempo y costos operativos.",
        "Integración con tus sistemas actuales.",
        "Mayor productividad en tu negocio.",
      ],
      promo: "25% OFF",
    },
    {
      id: 3,
      title: "E-commerce",
      icon: <FaShoppingCart size={40} />,
      text: "Tiendas online listas para vender.",
      details: [
        "Tienda online con carrito de compras.",
        "Integración con medios de pago.",
        "Gestión de stock y productos.",
        "Diseño atractivo y fácil de usar.",
      ],
      promo: "40% OFF",
    },
    {
      id: 4,
      title: "Soporte Técnico",
      icon: <FaTools size={40} />,
      text: "Mantenimiento y asistencia técnica permanente.",
      details: [
        "Soporte remoto y presencial.",
        "Mantenimiento preventivo y correctivo.",
        "Instalación y configuración de software.",
        "Atención rápida y personalizada.",
      ],
      promo: "15% OFF",
    },
  ];

  return (
    <section
      id="services"
      style={{
        textAlign: "center",
      }}
    >
      {/* 🔍 SEO Tags */}
      <Helmet>
        <title>Servicios | Lunexa</title>
        <meta
          name="description"
          content="Descubre los servicios de Lunexa: desarrollo web, automatización, e-commerce y soporte técnico. Soluciones digitales a medida para tu negocio."
        />
        <meta
          name="keywords"
          content="Lunexa, desarrollo web, software a medida, automatización, e-commerce, soporte técnico, desarrollo de sistemas, Argentina"
        />
        <meta property="og:title" content="Servicios | Lunexa" />
        <meta
          property="og:description"
          content="Conocé los servicios que Lunexa ofrece: sitios web, sistemas personalizados y automatización de procesos."
        />
        <meta property="og:image" content="https://lunexa.vercel.app/lunexa-banner.png" />
        <meta property="og:url" content="https://lunexa.vercel.app/servicios" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
        Nuestros Servicios
      </h2>

      {/* Grilla de servicios */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(145deg, #1a0033, #2d0052)",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 0 20px rgba(155, 93, 229, 0.3)",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* Cartel de descuento */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "linear-gradient(135deg, #FF3CAC, #9B5DE5)",
                color: "white",
                fontWeight: "bold",
                fontSize: "0.9rem",
                padding: "6px 12px",
                borderRadius: "8px",
                boxShadow: "0 0 12px rgba(255, 60, 172, 0.5)",
              }}
            >
              {service.promo}
            </div>

            <div style={{ marginBottom: "15px", color: "#9B5DE5" }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
              {service.title}
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
              {service.text}
            </p>

            <motion.button
              onClick={() => setSelectedService(service)}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #9B5DE5, #FF3CAC)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 0 15px rgba(255, 60, 172, 0.5)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Ver más
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Modal con detalles */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "rgba(26, 0, 51, 0.9)",
                borderRadius: "20px",
                padding: "40px",
                maxWidth: "700px",
                width: "90%",
                color: "white",
                textAlign: "center",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 0 25px rgba(155, 93, 229, 0.4), 0 0 45px rgba(255, 60, 172, 0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #FF3CAC, #9B5DE5)",
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  boxShadow: "0 0 15px rgba(255, 60, 172, 0.5)",
                }}
              >
                {selectedService.promo}
              </div>

              <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                {selectedService.title}
              </h3>

              <ul
                style={{
                  textAlign: "left",
                  maxWidth: "600px",
                  margin: "0 auto 25px auto",
                  lineHeight: "1.8",
                }}
              >
                {selectedService.details.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <span style={{ color: "#4ade80", marginRight: "8px" }}>
                      ✅
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
                <motion.button
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    border: "2px solid #9B5DE5",
                    color: "white",
                    padding: "12px 26px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Cerrar
                </motion.button>

                <motion.a
                  href="https://ig.me/m/lunexasoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "linear-gradient(135deg, #9B5DE5, #FF3CAC)",
                    color: "white",
                    padding: "12px 26px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    boxShadow: "0 0 15px rgba(255, 60, 172, 0.5)",
                  }}
                >
                  Información
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Services;
