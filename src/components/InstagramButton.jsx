import React from "react";
import { FaInstagram } from "react-icons/fa";

function InstagramButton() {
  return (
    <a
      href="https://ig.me/m/lunexasoft" // 👉 reemplaza por tu usuario de IG
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
        animation: "pulse 1.8s infinite",
        
      }}
      title="Escríbeme en Instagram 📩"
    >
      <FaInstagram />
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 15px rgba(214,41,118,0.6); }
            50% { transform: scale(1.1); box-shadow: 0 0 25px rgba(214,41,118,1); }
            100% { transform: scale(1); box-shadow: 0 0 15px rgba(214,41,118,0.6); }
          }
        `}
      </style>
    </a>
  );
}

export default InstagramButton;
