import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Introduccion from "./Components/Introduccion/Introduccion";
import Presupuestos from "./Components/Presupuestos/Presupuestos";
import Proyectos from "./Components/Proyectos/Proyectos";
import Servicios from "./Components/Servicios/Servicios";

import ItemDetail from "./Components/ItemDetail/ItemDetail";

function Home() {
  return (
    <div className="contenedor-gral">
      <Introduccion />
      <Servicios />
      <Proyectos />
      <Presupuestos />
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();
  const state = location.state;
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ItemDetail />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/projects/:id" element={<ItemDetail isModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;