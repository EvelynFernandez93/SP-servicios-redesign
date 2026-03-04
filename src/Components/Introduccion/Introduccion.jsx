import React, { useEffect, useRef, useState } from "react";
import "../Introduccion/Introduccion.css";
import Experiencia from "../../svg/Experiencia.svg";
import Calidad from "../../svg/Calidad.svg";
import Confianza from "../../svg/Confianza.svg";

const Introduccion = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); 
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`introduccion-contenedor ${inView ? "is-inview" : ""}`}
    >
      <div className="introduccion-hero">
        <img
          src="/presentacion.png"
          alt="SP Servicios para la construcción"
          className="introduccion-img"
        />
      </div>

      <div className="introduccion-contenido">
        <div className="introduccion-texto-wrapper anim-text">
          <p className="tipografia-subtituloitalic introduccion-p">
            SP servicios para la construcción fue fundada por Sonia Pirrera,
            un maestro mayor de obra con más de 20 años en el rubro
          </p>
          <span className="introduccion-linea"></span>
        </div>
      </div>

      <div className="introduccion-servicios-contenedor">
        <div className="introduccion-servicios-contenido">

          <p className="introduccion-servicios-titulo tipografia-titulo">
            Lo que nos diferencia
          </p>

          <div className="introduccion-servicios-contenedor-cards">

            <article className="introduccion-card anim-card" style={{ "--d": "0ms" }}>
              <div className="introduccion-card-icono">
                <img src={Experiencia} alt="Experiencia" className="introduccion-icon" />
              </div>
              <p className="introduccion-card-titulo tipografia-titulo">Experiencia</p>
              <p className="introduccion-card-subtitulo tipografia-texto-s">
                Años de experiencia en el sector de la construcción
              </p>
            </article>

            <article className="introduccion-card anim-card" style={{ "--d": "120ms" }}>
              <div className="introduccion-card-icono">
                <img src={Calidad} alt="Calidad" className="introduccion-icon" />
              </div>
              <p className="introduccion-card-titulo tipografia-titulo">Calidad</p>
              <p className="introduccion-card-subtitulo tipografia-texto-s">
                Comprometidos con la excelencia en cada proyecto
              </p>
            </article>

            <article className="introduccion-card anim-card" style={{ "--d": "240ms" }}>
              <div className="introduccion-card-icono">
                <img src={Confianza} alt="Confianza" className="introduccion-icon" />
              </div>
              <p className="introduccion-card-titulo tipografia-titulo">Confianza</p>
              <p className="introduccion-card-subtitulo tipografia-texto-s">
                Construyendo relaciones duraderas con nuestros clientes
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;