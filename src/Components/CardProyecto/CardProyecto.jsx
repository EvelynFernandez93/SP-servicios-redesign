import React from "react";
import "./CardProyecto.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./CardProyecto.css";

const CardProyecto = ({ id, img, nombre, introduccion, descripcion }) => {
  const location = useLocation();

  return (
    <motion.article
      className="card-proyectos"
      layoutId={`card-${id}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to={`/projects/${id}`}
        state={{ backgroundLocation: location }}
        className="card-link"
        aria-label={`Abrir detalle de ${nombre}`}
      >
        <img className="card-img" src={img} alt={nombre} loading="lazy" />

        <div className="card-contenido">
          <p className="card-titulo tipografia-texto">{nombre}</p>
          <p className="card-introduccion tipografia-texto-s">{introduccion}</p>
          <p className="card-descripcion tipografia-texto-s">{descripcion}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default CardProyecto;