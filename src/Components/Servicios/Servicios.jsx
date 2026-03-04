
import React, { useEffect, useRef, useState } from "react";
import "../Servicios/Servicios.css";
import Mision from "../../svg/Mision.svg";
import Vision from "../../svg/Vision.svg";
import Valores from "../../svg/Valores.svg";
import Check from "../../svg/Check.svg";


import ServiciosImg from "../../assets/servicios.png"; // o .jpg

const Servicios = () => {
  const ref = useRef(null);
  const imgWrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    const section = ref.current;
    if (!wrap || !section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (!inView) return;

      const r = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const progress = (vh - r.top) / (vh + r.height); 
      const clamped = Math.max(0, Math.min(1, progress));

      const py = (clamped - 0.5) * 18; 
      wrap.style.setProperty("--py", `${py}px`);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [inView]);

  return (
    <section ref={ref} className={`servicios-contenedor ${inView ? "is-inview" : ""}`}>
      <div className="servicios-contenido">
        <p className="servicios-titulo tipografia-titulo">Sobre nosotros</p>

        <p className="servicios-subtitulo tipografia-subtitulo">
          Somos una empresa dedicada a brindar servicios integrales para la construcción
        </p>

        <div className="servicios-contenedor-informacion">
          <div className="servicios-img" ref={imgWrapRef}>
            <img
              src={ServiciosImg}
              alt="Cartelería SP Servicios"
              className="servicios-img-real"
              loading="lazy"
            />
          </div>
          <div className="servicios-contenedor-cards">
            <article className="servicios-card anim-card" style={{ "--d": "0ms" }}>
              <div className="servicios-card-titulo-icono">
                <div className="servicios-card-icono">
                  <img src={Mision} alt="Misión" className="servicios-icon" />
                </div>
                <p className="servicios-card-titulo tipografia-titulo">Nuestra misión</p>
              </div>
              <p className="servicios-card-descripcion tipografia-texto">
                Proporcionar servicios de construcción de alta calidad que superen las expectativas de
                nuestros clientes, utilizando las mejores prácticas y tecnologías del sector.
              </p>
            </article>

            <article className="servicios-card anim-card" style={{ "--d": "120ms" }}>
              <div className="servicios-card-titulo-icono">
                <div className="servicios-card-icono">
                  <img src={Vision} alt="Visión" className="servicios-icon" />
                </div>
                <p className="servicios-card-titulo tipografia-titulo">Nuestra visión</p>
              </div>
              <p className="servicios-card-descripcion tipografia-texto">
                Ser la empresa de referencia en servicios de construcción, reconocida por nuestra
                excelencia, innovación y compromiso con cada proyecto que emprendemos.
              </p>
            </article>

            <article className="servicios-card anim-card" style={{ "--d": "240ms" }}>
              <div className="servicios-card-titulo-icono">
                <div className="servicios-card-icono">
                  <img src={Valores} alt="Valores" className="servicios-icon" />
                </div>
                <p className="servicios-card-titulo tipografia-titulo">Nuestros valores</p>
              </div>

              <div className="servicios-card-valores">
                <img src={Check} alt="" className="servicios-check" aria-hidden="true" />
                <p className="servicios-card-valores-item tipografia-texto">Integridad y transparencia</p>
              </div>

              <div className="servicios-card-valores">
                <img src={Check} alt="" className="servicios-check" aria-hidden="true" />
                <p className="servicios-card-valores-item tipografia-texto">Excelencia en el servicio</p>
              </div>

              <div className="servicios-card-valores">
                <img src={Check} alt="" className="servicios-check" aria-hidden="true" />
                <p className="servicios-card-valores-item tipografia-texto">Compromiso con la seguridad</p>
              </div>

              <div className="servicios-card-valores">
                <img src={Check} alt="" className="servicios-check" aria-hidden="true" />
                <p className="servicios-card-valores-item tipografia-texto">Innovación constante</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;