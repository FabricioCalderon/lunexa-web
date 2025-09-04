import { useState, useEffect } from "react";
import { FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";
import Gym from "../assets/Gym.png"; 
import Tienda from "../assets/Tienda.png"; 

function Clientes() {
  const casosExito = [
    {
      nombre: "Tienda de Ropa 'StiloTradi'",
      descripcion: "Sistema para gestionar ventas, stock y reportes de forma sencilla.",
      problema: "Antes tenían problemas para controlar el inventario y facturación.",
      solucion: "Automatizamos la gestión de stock, ventas y reportes diarios.",
      imagenes: [Tienda],
      redes: {
        instagram: "https://www.instagram.com/stilotradi",
        facebook: "https://www.facebook.com/stilotradi",
      },
    },
    {
      nombre: "Gimnasio 'El Sirio'",
      descripcion: "Control completo de asistencia, pagos y contabilidad.",
      problema: "Llevaban todo en papel y se perdían registros.",
      solucion: "Digitalizamos el control de socios y las finanzas, con reportes claros.",
      imagenes: [Gym],
      redes: {
        instagram: "https://www.instagram.com/gimnasioelsirio",
        facebook: "https://www.facebook.com/fitlife",
      },
    },
  ];

  return (
    <section id="clientes" style={{ padding: "60px 20px", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "3rem" }}>
        Clientes
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
        {casosExito.map((caso, index) => (
          <ClienteCard key={index} caso={caso} />
        ))}
      </div>
    </section>
  );
}

function ClienteCard({ caso }) {
  const [current, setCurrent] = useState(0);
  const [float, setFloat] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloat((prev) => {
        if (prev >= 5) setDir(-1);
        if (prev <= -5) setDir(1);
        return prev + dir;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [dir]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % caso.imagenes.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + caso.imagenes.length) % caso.imagenes.length);

  const carouselButtonStyle = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: "10px",
    transform: "translateY(-50%)",
    background: "#483f53ff",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        borderRadius: "20px",
        padding: "50px 20px 20px 20px", // ↑ más espacio arriba para el badge
        width: "90%",
        maxWidth: "600px",
        background: "rgba(58,0,102,0.7)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BADGE ARRIBA DE LA IMAGEN CON FLOTACIÓN */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          top: "20px", // más arriba de la imagen
          left: "5%",
          transform: "translateX(-50%)",
          background: "rgba(255, 60, 172, 0.85)",
          color: "white",
          fontWeight: "bold",
          padding: "5px 15px",
          borderRadius: "12px",
          fontSize: "0.9rem",
          zIndex: 10,
          textAlign: "center",
          boxShadow: "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        Software a medida
      </motion.div>

      <img
        src={caso.imagenes[current]}
        alt={`${caso.nombre}-${current}`}
        style={{
          width: "100%",
          borderRadius: "15px",
          cursor: "pointer",
          transition: "transform 0.4s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      {caso.imagenes.length > 1 && (
        <>
          <button onClick={prevSlide} style={carouselButtonStyle("left")}>‹</button>
          <button onClick={nextSlide} style={carouselButtonStyle("right")}>›</button>
        </>
      )}

      <h3 style={{ color: "white", marginTop: "20px", fontSize: "1.8rem" }}>{caso.nombre}</h3>
      <p style={{ color: "white", fontSize: "1rem", marginTop: "10px" }}>{caso.descripcion}</p>
      <p style={{ color: "#FFD700", fontWeight: "600" }}>
        <strong>Problema:</strong> {caso.problema}
      </p>
      <p style={{ color: "#60A5FA", fontWeight: "600" }}>
        <strong>Solución:</strong> {caso.solucion}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
        {caso.redes.instagram && (
          <a
            href={caso.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#E1306C",
              fontSize: "1.8rem",
              transform: `translateY(${float}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <FaInstagram />
          </a>
        )}
        
      </div>

      <a
        href="https://www.instagram.com/lunexasoft"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 25px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #FF3CAC, #9B5DE5)",
          color: "white",
          fontWeight: "600",
          textDecoration: "none",
          transition: "all 0.3s",
          boxShadow: "0 0 15px #9B5DE5",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 0 30px #FF3CAC";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 15px #9B5DE5";
        }}
      >
        Más Info
      </a>
    </motion.div>
  );
}

export default Clientes;
