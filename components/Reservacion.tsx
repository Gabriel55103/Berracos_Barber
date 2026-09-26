"use client";

import { FormEvent, useState } from "react";

const barberos = ["Jhonny", "Kevin", "Andrés"];

const cortes = [
  "Low Fade - $250",
  "Mid Fade - $280",
  "Taper Fade - $300",
  "Corte + Barba - $380",
];

const horarios = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const fechasDisponibles = [
  "24 Septiembre",
  "25 Septiembre",
  "26 Septiembre",
  "29 Septiembre",
  "30 Septiembre",
];

const fechasOcupadas = [
  "23 Septiembre",
  "27 Septiembre",
  "28 Septiembre",
];

export default function Reservacion() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMensaje(
      "¡Cita registrada correctamente! Te esperamos en BERRACOS BARBER."
    );
  };

  return (
    <section className="seccion reservacion" id="reservar">
      <div className="encabezado">
        <span>BOOKING</span>
        <h2>AGENDA TU CITA</h2>
      </div>

      <div className="reservacion-contenedor">
        <div className="reservacion-formulario">
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nombre">Nombre completo</label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Escribe tu nombre"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>

              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Tu número de teléfono"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="barbero">Barbero</label>

              <select id="barbero" name="barbero" required>
                <option value="">Selecciona un barbero</option>

                {barberos.map((barbero) => (
                  <option value={barbero} key={barbero}>
                    {barbero}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo">
              <label htmlFor="corte">Servicio</label>

              <select id="corte" name="corte" required>
                <option value="">Selecciona un servicio</option>

                {cortes.map((corte) => (
                  <option value={corte} key={corte}>
                    {corte}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo">
              <label htmlFor="fecha">Fecha</label>

              <select id="fecha" name="fecha" required>
                <option value="">Selecciona una fecha</option>

                {fechasDisponibles.map((fecha) => (
                  <option value={fecha} key={fecha}>
                    {fecha}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo">
              <label htmlFor="hora">Horario</label>

              <select id="hora" name="hora" required>
                <option value="">Selecciona un horario</option>

                {horarios.map((hora) => (
                  <option value={hora} key={hora}>
                    {hora}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo campo-full">
              <label htmlFor="mensaje">Mensaje adicional</label>

              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="¿Tienes alguna solicitud especial?"
                rows={4}
              ></textarea>
            </div>

            <div className="campo campo-full">
              <button type="submit" className="boton">
                CONFIRMAR CITA
              </button>
            </div>

            {mensaje && (
              <div className="mensaje-exito">
                {mensaje}
              </div>
            )}
          </form>
        </div>

        <aside className="disponibilidad">
          <h3>DISPONIBILIDAD</h3>

          <p>Selecciona una de las fechas disponibles para tu cita.</p>

          <div className="fechas">
            {fechasDisponibles.map((fecha) => (
              <div className="fecha fecha-disponible" key={fecha}>
                <span>{fecha}</span>
                <strong>Disponible</strong>
              </div>
            ))}

            {fechasOcupadas.map((fecha) => (
              <div className="fecha fecha-ocupada" key={fecha}>
                <span>{fecha}</span>
                <strong>Ocupada</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}