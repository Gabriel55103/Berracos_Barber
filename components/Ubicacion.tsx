"use client";

type UbicacionProps = {
  cambiarVista: (vista: string) => void;
};

export default function Ubicacion({
  cambiarVista,
}: UbicacionProps) {
  return (
    <section className="seccion ubicacion-seccion">
      <div className="encabezado">
        <span>LOCATION</span>

        <h2>ENCUÉNTRANOS</h2>

        <p>
          Visítanos y disfruta una experiencia diferente.
        </p>
      </div>

      <div className="ubicacion-card">
        <div className="ubicacion-info">
          <div className="ubicacion-icono">
            📍
          </div>

          <div>
            <span className="ubicacion-label">
              BERRACOS BARBER
            </span>

            <h3>
              Nuestra ubicación
            </h3>

            <p>
              Av. Principal #00-00
            </p>

            <p>
              Libres, Puebla, México
            </p>

            <div className="horario">
              <strong>HORARIO</strong>

              <span>
                Lunes a sábado
              </span>

              <span>
                9:00 AM - 8:00 PM
              </span>
            </div>

            <button
              className="boton boton-ubicacion"
              onClick={() =>
                window.open(
                  "https://maps.google.com",
                  "_blank"
                )
              }
            >
              VER EN MAPA
            </button>
          </div>
        </div>

        <div className="ubicacion-mapa">
          <div className="mapa-overlay">
            <span>📍</span>

            <strong>
              BERRACOS BARBER
            </strong>

            <small>
              Libres, Puebla
            </small>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        <button
          className="boton"
          onClick={() => cambiarVista("reservar")}
        >
          RESERVAR CITA
        </button>
      </div>
    </section>
  );
}