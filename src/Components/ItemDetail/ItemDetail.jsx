import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import proyectosData from "../../data/data.json";
import "./ItemDetail.css";

const ItemDetail = ({ isModal = false }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const proyecto = useMemo(() => {
    return proyectosData.find((p) => p.id === parseInt(id, 10));
  }, [id]);

  const closeModal = () => navigate(-1);

  useEffect(() => {
    if (!isModal) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isModal]);

  if (!proyecto) return <p className="itemdetail-notfound">Proyecto no encontrado</p>;

  if (!isModal) {
    return (
      <div className="itemdetail-page">
        <div className="itemdetail-page-inner">
          <img
            className="itemdetail-page-img"
            src={proyecto.portada}
            alt={proyecto.nombre}
            loading="lazy"
          />

          <h2 className="itemdetail-nombre">{proyecto.nombre}</h2>
          <p className="itemdetail-intro">{proyecto.introduccion}</p>
          <p className="itemdetail-descripcion">{proyecto.descripcion}</p>
          <p className="itemdetail-info">{proyecto.informacion}</p>

          <button className="boton-terciario" onClick={() => navigate("/")}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="itemdetail-overlay"
        onMouseDown={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="itemdetail-modal"
          onMouseDown={(e) => e.stopPropagation()}
          layoutId={`card-${proyecto.id}`}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          <button className="itemdetail-close" onClick={closeModal} aria-label="Cerrar">
            ✕
          </button>

          <div className="itemdetail-header">
            <img
              src={proyecto.portada}
              alt={proyecto.nombre}
              className="itemdetail-img"
              loading="lazy"
            />
            <div className="itemdetail-gradient" />
          </div>

          <div className="itemdetail-body">
            <h2 className="itemdetail-nombre tipografia-titulo ">{proyecto.nombre}</h2>
            <p className="itemdetail-intro tipografia-subtitulo">{proyecto.introduccion}</p>
            <p className="itemdetail-descripcion tipografia-texto">{proyecto.descripcion}</p>
            <p className="itemdetail-info tipografia-texto-s ">{proyecto.informacion}</p>

            <div className="itemdetail-actions">
              <button className="presupuesto-btn" onClick={closeModal}>
                Volver
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemDetail;