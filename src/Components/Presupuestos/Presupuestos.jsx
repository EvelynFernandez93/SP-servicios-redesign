import React, { useEffect, useRef, useState } from "react";
import "../Presupuestos/Presupuestos.css";
import Next from "../../svg/Next.svg";

const Presupuestos = () => {
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
    <section
      ref={ref}
      className={`presupuestos-contenedor ${inView ? "is-inview" : ""}`}
    >
      <div className="presupuestos-contenido">

        <div className="presupuesto-titulo tipografia-titulo anim-item" style={{ "--d": "0ms" }}>
          <p>¡Pedí tu presupuesto ya!</p>
        </div>

        <div className="presupuesto-subtitulo tipografia-subtitulo anim-item" style={{ "--d": "150ms" }}>
          <p>Recibí asesoramiento profesional sin compromiso</p>
        </div>

        <a
  href="https://wa.me/5492616803553?text=Hola%20SP%20-%20SERVICIOS%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto"
  target="_blank"
  rel="noopener noreferrer"
  className="presupuesto-btn anim-item"
  style={{ "--d": "300ms" }}
>
  <span className="presupuesto-btn-label">
    Enviar mensaje
  </span>
  <img
    className="presupuesto-btn-icon"
    src={Next}
    alt=""
    aria-hidden="true"
  />
</a>

        <div className="presupuesto-informacion anim-item" style={{ "--d": "450ms" }}>
          <div className="presupuesto-informacion-texto"><p>Respuesta en 24hs</p></div>
          <div className="presupuesto-informacion-texto"><p>Presupuesto sin cargo</p></div>
          <div className="presupuesto-informacion-texto"><p>Asesoramiento profesional</p></div>
        </div>

      </div>
    </section>
  );
};

export default Presupuestos;