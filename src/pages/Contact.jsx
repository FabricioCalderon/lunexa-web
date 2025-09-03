import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #1A0033 0%, #3A0066 50%, #4B0082 100%)",
        borderRadius: "20px",
        margin: "20px",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "white",
          textShadow: "0 0 10px rgba(255,255,255,0.6)",
        }}
      >
        Contacto
      </h2>

      <motion.form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          margin: "0 auto",
          gap: "20px",
          background: "rgba(255,255,255,0.05)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["Tu nombre", "Tu email"].map((placeholder, i) => (
          <motion.input
            key={i}
            type={i === 1 ? "email" : "text"}
            placeholder={placeholder}
            style={{
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(58,0,102,0.5)",
              color: "white",
              boxShadow: "0 0 10px #60A5FA",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 20px #60A5FA" }}
          />
        ))}

        <motion.textarea
          placeholder="Tu mensaje"
          rows={5}
          style={{
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "rgba(58,0,102,0.5)",
            color: "white",
            boxShadow: "0 0 10px #60A5FA",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 20px #60A5FA" }}
        ></motion.textarea>

        <motion.button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #FF3CAC, #9B5DE5)",
            color: "white",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 0 20px #9B5DE5",
            transition: "0.5s",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px #60A5FA",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

export default Contact;
