"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Barberos from "../components/Barberos";
import Cortes from "../components/Cortes";
import Reservacion from "../components/Reservacion";
import Ubicacion from "../components/Ubicacion";
import Calendario from "../components/Calendario";
import Login from "@/components/login";
import Footer from "../components/Footer";

export default function Page() {
  const [vista, setVista] = useState("inicio");

  const cambiarVista = (nuevaVista: string) => {
    setVista(nuevaVista);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      <Navbar cambiarVista={cambiarVista} />

      {vista === "inicio" && (
        <main className="inicio">
          <Hero cambiarVista={cambiarVista} />

          <div className="inicio-accesos">
            <div className="inicio-accesos-contenido">
              <span>ACCESO RÁPIDO</span>

              <h2>¿Qué deseas hacer?</h2>

              <p>
                Explora nuestros servicios, conoce a nuestros barberos o
                reserva tu cita.
              </p>

              <div className="inicio-accesos-botones">
                <button
                  className="inicio-acceso"
                  onClick={() => cambiarVista("servicios")}
                >
                  SERVICIOS
                </button>

                <button
                  className="inicio-acceso"
                  onClick={() => cambiarVista("barberos")}
                >
                  BARBEROS
                </button>

                <button
                  className="inicio-acceso"
                  onClick={() => cambiarVista("cortes")}
                >
                  CORTES
                </button>

                <button
                  className="inicio-acceso inicio-acceso-principal"
                  onClick={() => cambiarVista("reservar")}
                >
                  RESERVAR CITA
                </button>

                <button
                  className="inicio-acceso"
                  onClick={() => cambiarVista("ubicacion")}
                >
                  UBICACIÓN
                </button>
              </div>
            </div>
          </div>

          <Servicios cambiarVista={cambiarVista} />

          <Barberos />

          <Cortes cambiarVista={cambiarVista} />

          <Ubicacion cambiarVista={cambiarVista} />
        </main>
      )}

      {vista === "servicios" && (
        <Servicios cambiarVista={cambiarVista} />
      )}

      {vista === "barberos" && <Barberos />}

      {vista === "cortes" && (
        <Cortes cambiarVista={cambiarVista} />
      )}

      {vista === "calendario" && (
        <Calendario cambiarVista={cambiarVista} />
      )}

      {vista === "reservar" && (
        <Reservacion cambiarVista={cambiarVista} />
      )}

      {vista === "ubicacion" && (
        <Ubicacion cambiarVista={cambiarVista} />
      )}

      {vista === "login" && (
        <Login cambiarVista={cambiarVista} />
      )}

      <Footer cambiarVista={cambiarVista} />
    </>
  );
}