"use client";

import { useState } from "react";

type Reserva = {
  nombre: string;
  telefono: string;
  servicio: string;
  barbero: string;
  fecha: string;
  hora: string;
};

type ReservacionProps = {
  cambiarVista: (vista: string) => void;
};

const nombresMeses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const nombresDias = [
  "DOM",
  "LUN",
  "MAR",
  "MIÉ",
  "JUE",
  "VIE",
  "SÁB",
];

const horarios = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

export default function Reservacion({
  cambiarVista,
}: ReservacionProps) {
  const hoy = new Date();

  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());

  const [diaSeleccionado, setDiaSeleccionado] =
    useState<number | null>(null);

  const [horaSeleccionada, setHoraSeleccionada] =
    useState<string | null>(null);

  const [confirmado, setConfirmado] = useState(false);

  const [reserva, setReserva] = useState<Reserva>({
    nombre: "",
    telefono: "",
    servicio: "",
    barbero: "",
    fecha: "",
    hora: "",
  });

  const primerDia = new Date(anio, mes, 1).getDay();

  const diasDelMes = new Date(
    anio,
    mes + 1,
    0
  ).getDate();

  const cambiarMes = (direccion: number) => {
    setDiaSeleccionado(null);
    setHoraSeleccionada(null);

    setReserva((prev) => ({
      ...prev,
      fecha: "",
      hora: "",
    }));

    if (direccion === 1) {
      if (mes === 11) {
        setMes(0);
        setAnio(anio + 1);
      } else {
        setMes(mes + 1);
      }
    } else {
      if (mes === 0) {
        setMes(11);
        setAnio(anio - 1);
      } else {
        setMes(mes - 1);
      }
    }
  };

  const esDiaPasado = (dia: number) => {
    const fecha = new Date(anio, mes, dia);

    const fechaHoy = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate()
    );

    return fecha < fechaHoy;
  };

  const esHoy = (dia: number) => {
    return (
      dia === hoy.getDate() &&
      mes === hoy.getMonth() &&
      anio === hoy.getFullYear()
    );
  };

  const seleccionarDia = (dia: number) => {
    if (esDiaPasado(dia)) {
      return;
    }

    setDiaSeleccionado(dia);
    setHoraSeleccionada(null);

    const fecha = `${dia} de ${nombresMeses[mes]} de ${anio}`;

    setReserva((prev) => ({
      ...prev,
      fecha,
      hora: "",
    }));
  };

  const seleccionarHora = (hora: string) => {
    setHoraSeleccionada(hora);

    setReserva((prev) => ({
      ...prev,
      hora,
    }));
  };

  const cambiarCampo = (
    campo: keyof Reserva,
    valor: string
  ) => {
    setReserva((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const enviarReserva = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !reserva.nombre ||
      !reserva.telefono ||
      !reserva.servicio ||
      !reserva.barbero ||
      !reserva.fecha ||
      !reserva.hora
    ) {
      return;
    }

    setConfirmado(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const regresarInicio = () => {
    setConfirmado(false);
    setDiaSeleccionado(null);
    setHoraSeleccionada(null);

    setReserva({
      nombre: "",
      telefono: "",
      servicio: "",
      barbero: "",
      fecha: "",
      hora: "",
    });

    cambiarVista("inicio");
  };

  const nuevaReservacion = () => {
    setConfirmado(false);
    setDiaSeleccionado(null);
    setHoraSeleccionada(null);

    setReserva({
      nombre: "",
      telefono: "",
      servicio: "",
      barbero: "",
      fecha: "",
      hora: "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const diasCalendario = [];

  for (let i = 0; i < primerDia; i++) {
    diasCalendario.push(
      <div
        key={`vacio-${i}`}
        className="calendario-dia calendario-dia-vacio"
      />
    );
  }

  for (let dia = 1; dia <= diasDelMes; dia++) {
    const pasado = esDiaPasado(dia);

    const seleccionado =
      dia === diaSeleccionado;

    diasCalendario.push(
      <button
        key={dia}
        type="button"
        className={`calendario-dia ${
          pasado
            ? "calendario-dia-pasado"
            : "calendario-dia-disponible"
        } ${
          esHoy(dia)
            ? "calendario-dia-hoy"
            : ""
        } ${
          seleccionado
            ? "calendario-dia-seleccionado"
            : ""
        }`}
        disabled={pasado}
        onClick={() => seleccionarDia(dia)}
      >
        <span>{dia}</span>

        {!pasado && (
          <small>
            {dia % 4 === 0
              ? "Pocos"
              : "Disponible"}
          </small>
        )}
      </button>
    );
  }

  return (
    <section
      className="calendario-seccion"
      id="reservar"
    >
      <div className="calendario-encabezado">
        <span>RESERVACIÓN</span>

        <h1>Agenda tu cita</h1>

        <p>
          Completa tus datos y selecciona una fecha y horario.
        </p>
      </div>

      {!confirmado ? (
        <div className="calendario-contenedor">
          <div className="reservacion-formulario">
            <form
              className="formulario"
              onSubmit={enviarReserva}
            >
              <div className="campo">
                <label>NOMBRE</label>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={reserva.nombre}
                  onChange={(e) =>
                    cambiarCampo(
                      "nombre",
                      e.target.value
                    )
                  }
                  required
                />
              </div>

              <div className="campo">
                <label>TELÉFONO</label>

                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={reserva.telefono}
                  onChange={(e) =>
                    cambiarCampo(
                      "telefono",
                      e.target.value
                    )
                  }
                  required
                />
              </div>

              <div className="campo">
                <label>SERVICIO</label>

                <select
                  value={reserva.servicio}
                  onChange={(e) =>
                    cambiarCampo(
                      "servicio",
                      e.target.value
                    )
                  }
                  required
                >
                  <option value="">
                    Selecciona un servicio
                  </option>

                  <option value="Corte clásico">
                    Corte clásico
                  </option>

                  <option value="Fade">
                    Fade
                  </option>

                  <option value="Corte + barba">
                    Corte + barba
                  </option>

                  <option value="Barba">
                    Barba
                  </option>
                </select>
              </div>

              <div className="campo">
                <label>BARBERO</label>

                <select
                  value={reserva.barbero}
                  onChange={(e) =>
                    cambiarCampo(
                      "barbero",
                      e.target.value
                    )
                  }
                  required
                >
                  <option value="">
                    Selecciona un barbero
                  </option>

                  <option value="Carlos">
                    Carlos
                  </option>

                  <option value="Miguel">
                    Miguel
                  </option>

                  <option value="Alex">
                    Alex
                  </option>
                </select>
              </div>

              <div className="campo campo-full">
                <label>FECHA Y HORA</label>

                <div className="seleccion-cita">
                  {reserva.fecha ? (
                    <strong>
                      {reserva.fecha}

                      {reserva.hora
                        ? ` — ${reserva.hora}`
                        : ""}
                    </strong>
                  ) : (
                    <span>
                      Selecciona una fecha en el calendario.
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="boton"
                disabled={
                  !reserva.fecha ||
                  !reserva.hora
                }
              >
                CONFIRMAR RESERVACIÓN
              </button>
            </form>
          </div>

          <div className="calendario-principal">
            <div className="calendario-navegacion">
              <button
                type="button"
                className="calendario-flecha"
                onClick={() => cambiarMes(-1)}
              >
                ←
              </button>

              <div>
                <span>CALENDARIO</span>

                <h2>
                  {nombresMeses[mes]} de {anio}
                </h2>
              </div>

              <button
                type="button"
                className="calendario-flecha"
                onClick={() => cambiarMes(1)}
              >
                →
              </button>
            </div>

            <div className="calendario-semana">
              {nombresDias.map((dia) => (
                <span key={dia}>
                  {dia}
                </span>
              ))}
            </div>

            <div className="calendario-grid">
              {diasCalendario}
            </div>

            <div className="calendario-leyenda">
              <div>
                <span className="leyenda-punto leyenda-disponible" />
                <span>Disponible</span>
              </div>

              <div>
                <span className="leyenda-punto leyenda-hoy" />
                <span>Hoy</span>
              </div>

              <div>
                <span className="leyenda-punto leyenda-pasado" />
                <span>No disponible</span>
              </div>
            </div>

            {!diaSeleccionado ? (
              <div className="calendario-sin-seleccion">
                <span>SELECCIONA UN DÍA</span>

                <h2>Elige una fecha</h2>

                <p>
                  Selecciona un día en el calendario
                  para consultar los horarios disponibles.
                </p>
              </div>
            ) : (
              <>
                <div className="horarios-encabezado">
                  <span>FECHA SELECCIONADA</span>

                  <h2>
                    {diaSeleccionado} de{" "}
                    {nombresMeses[mes]} de {anio}
                  </h2>

                  <p>
                    Selecciona uno de los horarios disponibles.
                  </p>
                </div>

                <div className="horarios-grid">
                  {horarios.map((hora, index) => {
                    const ocupado =
                      (diaSeleccionado + index) % 7 === 0 ||
                      (diaSeleccionado + index) % 11 === 0;

                    return (
                      <button
                        key={hora}
                        type="button"
                        disabled={ocupado}
                        className={`horario-boton ${
                          ocupado
                            ? "horario-ocupado"
                            : ""
                        } ${
                          horaSeleccionada === hora
                            ? "horario-seleccionado"
                            : ""
                        }`}
                        onClick={() =>
                          seleccionarHora(hora)
                        }
                      >
                        {hora}

                        <small>
                          {ocupado
                            ? "Ocupado"
                            : "Disponible"}
                        </small>
                      </button>
                    );
                  })}
                </div>

                {horaSeleccionada && (
                  <div className="horario-confirmado">
                    <span>
                      HORARIO SELECCIONADO
                    </span>

                    <strong>
                      {horaSeleccionada}
                    </strong>

                    <p>
                      {diaSeleccionado} de{" "}
                      {nombresMeses[mes]} de {anio} ·{" "}
                      {horaSeleccionada}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="calendario-horarios">
          <div className="confirmacion">
            <div className="confirmacion-icono">
              ✓
            </div>

            <div className="horarios-encabezado">
              <span>RESERVACIÓN</span>

              <h2>¡Reservación realizada!</h2>

              <p>
                Tu cita ha sido registrada correctamente.
              </p>
            </div>

            <div className="resumen-cita">
              <div>
                <span>CLIENTE</span>
                <strong>
                  {reserva.nombre}
                </strong>
              </div>

              <div>
                <span>TELÉFONO</span>
                <strong>
                  {reserva.telefono}
                </strong>
              </div>

              <div>
                <span>SERVICIO</span>
                <strong>
                  {reserva.servicio}
                </strong>
              </div>

              <div>
                <span>BARBERO</span>
                <strong>
                  {reserva.barbero}
                </strong>
              </div>

              <div>
                <span>FECHA</span>
                <strong>
                  {reserva.fecha}
                </strong>
              </div>

              <div>
                <span>HORA</span>
                <strong>
                  {reserva.hora}
                </strong>
              </div>
            </div>

            <div className="confirmacion-botones">
              <button
                type="button"
                className="boton"
                onClick={regresarInicio}
              >
                REGRESAR AL INICIO
              </button>

              <button
                type="button"
                className="boton hero-boton-secundario"
                onClick={nuevaReservacion}
              >
                NUEVA RESERVACIÓN
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}