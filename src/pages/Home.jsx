import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
  <>
      <Helmet>
        <title>Lunexa | Desarrollo de Software y Soluciones Web</title>
        <meta
          name="description"
          content="Lunexa ofrece desarrollo de software, sitios web modernos y sistemas personalizados para potenciar tu negocio digital."
        />
        <meta name="keywords" content="Lunexa, desarrollo web, software a medida, sistemas, programación, Argentina, Django, React" />
        <meta property="og:title" content="Lunexa | Desarrollo de Software y Soluciones Web" />
        <meta property="og:description" content="Creamos soluciones tecnológicas adaptadas a tu negocio. Software, sistemas y diseño web profesional." />
        <meta property="og:image" content="https://lunexa.vercel.app/lunexa-banner.png" />
        <meta property="og:url" content="https://lunexa.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

    <section
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Título principal */}
      <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
        ¡Impulsa tu negocio!
      </h1>

      {/* Pregunta persuasiva */}
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        ¿Aún no tienes presencia en internet?
      </p>

      {/* Solución / valor agregado */}
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "20px",
          maxWidth: "650px",
          lineHeight: "1.5",
        }}
      >
        Con Lunexa tendrás tu página web profesional, tu tienda online o tu
        software de gestión listo para usar, eficiente y fácil de administrar,
        para que tu negocio crezca y destaque.
      </p>

      {/* Botones de contacto */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
       {/* WhatsApp
        <a
          href="https://wa.me/5491122334455?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#25D366",
            color: "white",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 0 15px #128C7E",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 30px #128C7E")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 15px #128C7E")
          }
        >
          <FaWhatsapp size={22} /> WhatsApp
        </a>
        */}

        {/* Instagram */}
        <a
            href="https://ig.me/m/lunexasoft"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background:
              "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
            color: "white",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 0 15px #DD2A7B",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 30px #DD2A7B")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 15px #DD2A7B")
          }
        >
          <FaInstagram size={22} /> Informacion
        </a>
      </div>
    </section>
  </>

  );
}

export default Home;
