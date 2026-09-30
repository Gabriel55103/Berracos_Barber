"use client";

import { useState } from "react";

type LoginProps = {
  cambiarVista: (vista: string) => void;
};

export default function Login({ cambiarVista }: LoginProps) {
  const [modo, setModo] = useState<"login" | "registro">("login");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!correo || !contrasena) {
      setMensaje("Completa todos los campos.");
      return;
    }

    if (modo === "registro" && contrasena !== confirmarContrasena) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    setMensaje(
      modo === "login"
        ? "Interfaz lista. El inicio de sesión se conectará después."
        : "Interfaz de registro lista. La cuenta se conectará después."
    );
  };

  return (
    <section className="login-seccion">
      <div className="login-contenedor">
        <div className="login-encabezado">
          <span>BERRACOS BARBER</span>

          <h1>
            {modo === "login" ? "INICIAR SESIÓN" : "CREAR CUENTA"}
          </h1>

          <p>
            {modo === "login"
              ? "Accede a tu cuenta para gestionar tus citas."
              : "Crea tu cuenta para reservar tus citas."}
          </p>
        </div>

        <form className="login-formulario" onSubmit={manejarSubmit}>
          {modo === "registro" && (
            <div className="login-campo">
              <label>NOMBRE</label>

              <input
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>
          )}

          <div className="login-campo">
            <label>CORREO ELECTRÓNICO</label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="login-campo">
            <label>CONTRASEÑA</label>

            <input
              type="password"
              placeholder="••••••••"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {modo === "registro" && (
            <div className="login-campo">
              <label>CONFIRMAR CONTRASEÑA</label>

              <input
                type="password"
                placeholder="••••••••"
                value={confirmarContrasena}
                onChange={(e) =>
                  setConfirmarContrasena(e.target.value)
                }
                required
                minLength={6}
              />
            </div>
          )}

          {modo === "login" && (
            <button
              type="button"
              className="login-recuperar"
              onClick={() =>
                setMensaje("La recuperación de contraseña estará disponible después.")
              }
            >
              ¿OLVIDASTE TU CONTRASEÑA?
            </button>
          )}

          <button type="submit" className="login-boton">
            {modo === "login" ? "INICIAR SESIÓN" : "CREAR CUENTA"}
          </button>
        </form>

        {mensaje && (
          <div className="login-mensaje">
            {mensaje}
          </div>
        )}

        <div className="login-separador">
          <span>O</span>
        </div>

        <button
          type="button"
          className="login-google"
          onClick={() =>
            setMensaje("El inicio de sesión con Google se conectará después.")
          }
        >
          <span className="login-google-icon">G</span>
          CONTINUAR CON GOOGLE
        </button>

        <div className="login-cambio">
          {modo === "login" ? (
            <>
              <span>¿NO TIENES UNA CUENTA?</span>

              <button
                type="button"
                onClick={() => {
                  setModo("registro");
                  setMensaje("");
                }}
              >
                CREAR CUENTA
              </button>
            </>
          ) : (
            <>
              <span>¿YA TIENES UNA CUENTA?</span>

              <button
                type="button"
                onClick={() => {
                  setModo("login");
                  setMensaje("");
                }}
              >
                INICIAR SESIÓN
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          className="login-regresar"
          onClick={() => cambiarVista("inicio")}
        >
          ← REGRESAR AL INICIO
        </button>
      </div>
    </section>
  );
}