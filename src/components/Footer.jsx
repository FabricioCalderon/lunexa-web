import React from "react";
import {  FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Lunexa</h2>
        <p className="footer-desc">
          Creamos soluciones digitales a medida para tu negocio.
        </p>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/lunexasoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/fabricio-calderon7/" // 🔹 Reemplaza con tu perfil
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lunexa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
