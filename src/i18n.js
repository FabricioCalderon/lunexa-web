// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // conecta con React
  .init({
    resources: {
      es: {
        translation: {
          home: "Inicio",
          services: "Servicios",
          about: "Quiénes Somos",
          "beneficios.titulo": "Beneficios",
          clientes: "Clientes",
          contact: "Contacto",
        },
      },
      en: {
        translation: {
          home: "Home",
          services: "Services",
          about: "About Us",
          "beneficios.titulo": "Benefits",
          clientes: "Clients",
          contact: "Contact",
        },
      },
    },
    lng: "es", // idioma por defecto
    fallbackLng: "es", // si falta una traducción
    interpolation: {
      escapeValue: false, // React ya protege de XSS
    },
  });

export default i18n;
