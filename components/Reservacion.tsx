"use client";

import { useMemo, useState } from "react";

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

const horasDisponibles = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const diasSemana = [
  "DOM",
  "LUN",
  "MAR",
  "MIÉ",
  "JUE",
  "VIE",
  "SÁB",
];

export default function Reservacion({
  cambiarVista,
}: ReservacionProps) {
  const hoy = new Date();

  const [mesActual, setMesActual] = useState(
    new Date(hoy.getFullYear(), hoy.getMonth(), 1)
  );

  const [diaSeleccionado, setDiaSeleccionado] =
    useState<Date | null>(null);

  const [horaSeleccionada, setHoraSeleccionada] =
    useState("");

  const [confirmado, setConfirmado] = useState(false);

  const [reserva, setReserva] = useState<Reserva>({
    nombre: "",
    telefono: "",
    servicio: "",
    barbero: "",
    fecha: "",
    hora: "",
  });

  const diasCalendario = useMemo(() => {
    const primerDia = new Date(
      mesActual.getFullYear(),
      mesActual.getMonth(),
      1
    );

    const ultimoDia = new Date(
      mesActual.getFullYear(),
      mesActual.getMonth() + 1,
      0
    );

    const dias: Array<Date | null> = [];

    for (let i = 0; i < primerDia.getDay(); i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      dias.push(
        new Date(
          mesActual.getFullYear(),
          mesActual.getMonth(),
          dia
        )
      );
    }

    return dias;
  }, [mesActual]);

  const nombreMes = mesActual.toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });

  const mesAnteriorPermitido =
    mesActual.getFullYear() > hoy.getFullYear() ||
    (mesActual.getFullYear() === hoy.getFullYear() &&
      mesActual.getMonth() > hoy.getMonth());

  const esHoy = (fecha: Date) => {
    return (
      fecha.getDate() === hoy.getDate() &&
      fecha.getMonth() === hoy.getMonth() &&
      fecha.getFullYear() === hoy.getFullYear()
    );
  };

  const esPasado = (fecha: Date) => {
    const actual = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate()
    );

    return fecha < actual;
  };

  const seleccionarDia = (fecha: Date) => {
    if (esPasado(fecha)) return;

    setDiaSeleccionado(fecha);
    setHoraSeleccionada("");

    setReserva((prev) => ({
      ...prev,
      fecha: fecha.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      hora: "",
    }));
  };

  const cambiarMes = (cantidad: number) => {
    const nuevoMes = new Date(
      mesActual.getFullYear(),
      mesActual.getMonth() + cantidad,
      1
    );

    const primerMesPermitido = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      1
    );

    if (nuevoMes < primerMesPermitido) {
      return;
    }

    setMesActual(nuevoMes);
    setDiaSeleccionado(null);
    setHoraSeleccionada("");

    setReserva((prev) => ({
      ...prev,
      fecha: "",
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
    setHoraSeleccionada("");

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

  if (confirmado) {
    return (
      <section className="seccion reservacion">
        <div className="encabezado">
          <span>RESERVACIÓN</span>
          <h2>Cita confirmada</h2>
          <p>
            Tu reservación ha sido registrada correctamente.
          </p>
        </div>

        <div className="confirmacion">
          <div className="confirmacion-icono">
            ✓
          </div>

          <h3>¡Reservación realizada!</h3>

          <p>
            Estos son los datos de tu cita.
          </p>

          <div className="resumen-cita">
            <div>
              <span>CLIENTE</span>
              <strong>{reserva.nombre}</strong>
            </div>

            <div>
              <span>TELÉFONO</span>
              <strong>{reserva.telefono}</strong>
            </div>

            <div>
              <span>SERVICIO</span>
              <strong>{reserva.servicio}</strong>
            </div>

            <div>
              <span>BARBERO</span>
              <strong>{reserva.barbero}</strong>
            </div>

            <div>
              <span>FECHA</span>
              <strong>{reserva.fecha}</strong>
            </div>

            <div>
              <span>HORA</span>
              <strong>{reserva.hora}</strong>
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
              onClick={() => {
                setConfirmado(false);
                setDiaSeleccionado(null);
                setHoraSeleccionada("");

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
              }}
            >
              NUEVA RESERVACIÓN
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="seccion reservacion"
      id="reservar"
    >
      <div className="encabezado">
        <span>RESERVACIÓN</span>

        <h2>Agenda tu cita</h2>

        <p>
          Completa tus datos y selecciona una fecha y horario.
        </p>
      </div>

      <div className="reservacion-contenedor">
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
            >
              CONFIRMAR RESERVACIÓN
            </button>
          </form>
        </div>

        <div className="disponibilidad">
          <div className="disponibilidad-titulo">
            <span>AGENDA</span>

            <h3>Disponibilidad</h3>

            <p>
              Selecciona un día y después un horario.
            </p>
          </div>

          <div className="calendario">
            <div className="calendario-header">
              <button
                type="button"
                className="calendario-flecha"
                onClick={() => cambiarMes(-1)}
                disabled={!mesAnteriorPermitido}
              >
                ‹
              </button>

              <strong>
                {nombreMes.charAt(0).toUpperCase() +
                  nombreMes.slice(1)}
              </strong>

              <button
                type="button"
                className="calendario-flecha"
                onClick={() => cambiarMes(1)}
              >
                ›
              </button>
            </div>

            <div className="calendario-semana">
              {diasSemana.map((dia) => (
                <span key={dia}>
                  {dia}
                </span>
              ))}
            </div>

            <div className="calendario-dias">
              {diasCalendario.map(
                (fecha, index) => {
                  if (!fecha) {
                    return (
                      <div
                        key={`vacio-${index}`}
                        className="dia-vacio"
                      />
                    );
                  }

                  const seleccionado =
                    diaSeleccionado?.toDateString() ===
                    fecha.toDateString();

                  return (
                    <button
                      key={fecha.toISOString()}
                      type="button"
                      disabled={esPasado(fecha)}
                      className={[
                        "dia-calendario",
                        esHoy(fecha)
                          ? "dia-hoy"
                          : "",
                        seleccionado
                          ? "dia-seleccionado"
                          : "",
                        esPasado(fecha)
                          ? "dia-pasado"
                          : "",
                      ].join(" ")}
                      onClick={() =>
                        seleccionarDia(fecha)
                      }
                    >
                      {fecha.getDate()}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {!diaSeleccionado && (
            <div className="calendario-ayuda">
              <span>1</span>
              <p>
                Selecciona una fecha disponible
                para mostrar los horarios.
              </p>
            </div>
          )}

          {diaSeleccionado && (
            <div className="horarios">
              <h3>
                Horarios disponibles
              </h3>

              <p>
                {diaSeleccionado.toLocaleDateString(
                  "es-MX",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  }
                )}
              </p>

              <div className="horarios-grid">
                {horasDisponibles.map(
                  (hora) => (
                    <button
                      key={hora}
                      type="button"
                      className={
                        horaSeleccionada === hora
                          ? "hora hora-seleccionada"
                          : "hora"
                      }
                      onClick={() =>
                        seleccionarHora(hora)
                      }
                    >
                      {hora}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}