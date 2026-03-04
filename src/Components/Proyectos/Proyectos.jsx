import React, { useEffect, useMemo, useState } from "react";
import "./Proyectos.css";
import CardProyecto from "../CardProyecto/CardProyecto";
import data from "../../data/data.json";

const CARD_W = 308;
const GAP = 24;

const Proyectos = () => {
  const items = useMemo(() => (Array.isArray(data) ? data : []), []);
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const next = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setPerView(next);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, items.length - perView);
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [perView, items.length]);

  const maxIndex = Math.max(0, items.length - perView);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const trackX = -(index * (CARD_W + GAP));

  return (
    <section className="proyectos-contenedor">
      <div className="proyectos-contenido">
        <div className="proyectos-informacion">
          <p className="proyectos-titulo tipografia-headline">
            Conocé nuestros servicios
          </p>
          <p className="proyectos-subtitulo tipografia-subtitulo">
            Descubre algunos de nuestros trabajos que ofrecemos
          </p>
        </div>

        <div className="proyectos-carousel">
          {items.length > perView && (
            <button
              className="proyectos-nav proyectos-nav--left"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              aria-label="Anterior"
            >
              ‹
            </button>
          )}

          <div className="proyectos-viewport">
            <div
              className="proyectos-track"
              style={{ transform: `translateX(${trackX}px)` }}
            >
              {items.map((p) => (
                <div className="proyectos-slide" key={p.id}>
                  <CardProyecto
                    id={p.id}                 
                    img={p.portada}
                    nombre={p.nombre}
                    introduccion={p.introduccion}
                    descripcion={p.descripcion}
                  />
                </div>
              ))}
            </div>
          </div>

          {items.length > perView && (
            <button
              className="proyectos-nav proyectos-nav--right"
              onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
              disabled={!canNext}
              aria-label="Siguiente"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;


