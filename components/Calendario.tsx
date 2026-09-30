"use client";

import { useState } from "react";

type CalendarioProps = {
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

export default function Calendario({
  cambiarVista,
}: CalendarioProps) {
  const hoy = new Date();

  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());
  const [diaSeleccionado, setDiaSeleccionado] = useState<number | null>(
    null
  );
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(
    null
  );

  const primerDia = new Date(anio, mes, 1).getDay();
  const diasDelMes = new Date(anio, mes + 1, 0).getDate();

  const cambiarMes = (direccion: number) => {
    setDiaSeleccionado(null);
    setHoraSeleccionada(null);

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
    const seleccionado = dia === diaSeleccionado;

    diasCalendario.push(
      <button
        key={dia}
        type="button"
        className={`calendario-dia ${
          pasado ? "calendario-dia-pasado" : "calendario-dia-disponible"
        } ${esHoy(dia) ? "calendario-dia-hoy" : ""} ${
          seleccionado ? "calendario-dia-seleccionado" : ""
        }`}
        disabled={pasado}
        onClick={() => seleccionarDia(dia)}
      >
        <span>{dia}</span>

        {!pasado && (
          <small>
            {dia % 4 === 0 ? "Pocos" : "Disponible"}
          </small>
        )}
      </button>
    );
  }

  const fechaSeleccionada =
    diaSeleccionado !== null
      ? `${diaSeleccionado} de ${nombresMeses[mes]} de ${anio}`
      : "";

  return (
    <section className="calendario-seccion">
      <div className="calendario-encabezado">
        <span>AGENDA</span>

        <h1>Disponibilidad</h1>

        <p>
          Consulta los días y horarios disponibles para tu próxima cita.
        </p>
      </div>

      <div className="calendario-contenedor">
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
              <span key={dia}>{dia}</span>
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
        </div>

        <div className="calendario-horarios">
          {!diaSeleccionado ? (
            <div className="calendario-sin-seleccion">
              <span>SELECCIONA UN DÍA</span>

              <h2>Elige una fecha</h2>

              <p>
                Selecciona un día en el calendario para consultar los
                horarios disponibles.
              </p>
            </div>
          ) : (
            <>
              <div className="horarios-encabezado">
                <span>FECHA SELECCIONADA</span>

                <h2>{fechaSeleccionada}</h2>

                <p>Selecciona uno de los horarios disponibles.</p>
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
                        ocupado ? "horario-ocupado" : ""
                      } ${
                        horaSeleccionada === hora
                          ? "horario-seleccionado"
                          : ""
                      }`}
                      onClick={() => setHoraSeleccionada(hora)}
                    >
                      {hora}
                      <small>
                        {ocupado ? "Ocupado" : "Disponible"}
                      </small>
                    </button>
                  );
                })}
              </div>

              {horaSeleccionada && (
                <div className="horario-confirmado">
                  <span>HORARIO SELECCIONADO</span>

                  <strong>{horaSeleccionada}</strong>

                  <p>
                    {fechaSeleccionada} · {horaSeleccionada}
                  </p>

                  <button
                    type="button"
                    onClick={() => cambiarVista("reservar")}
                  >
                    RESERVAR ESTA HORA
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}