import React, { useEffect, useRef, useState } from "react";
import "../Footer/Footer.css";
import Facebook from "../../svg/Facebook.svg"
import Instagram from "../../svg/Instagram.svg"


const Footer = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className={`footer-contenedor ${inView ? "is-inview" : ""}`}>
      <div className="footer-contenido">
        <div className="footer-titulos anim-item" style={{ "--d": "0ms" }}>
          <div className="footer-titulo tipografia-subtitulo">
            <p>SP - servicios para la construcción</p>
          </div>
          <div className="footer-subtitulo tipografia-subtituloitalic">
            <p>¡Tu proyecto en nuestras manos!</p>
          </div>
        </div>

        <div className="footer-informacion anim-item" style={{ "--d": "160ms" }}>
          <div className="footer-informacion-texto">
            <p>Seguinos en nuestras redes</p>
          </div>

          <div className="footer-informacion-redes" aria-label="Redes sociales">
            <a
              className="footer-icon"
              href="https://www.instagram.com/sp.servicioss?igsh=MWppeXc5MzB2eWZ3NQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              {<img src={Instagram} alt="" aria-hidden="true" />}
              <span className="footer-icon-placeholder" aria-hidden="true"></span>
            </a>

            <a
              className="footer-icon"
              href="https://www.facebook.com/profile.php?id=61582065863798"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              {<img src={Facebook} alt="" aria-hidden="true" />}
              <span className="footer-icon-placeholder" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="footer-legal anim-item" style={{ "--d": "320ms" }}>
          <p>© {new Date().getFullYear()} SP Servicios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;