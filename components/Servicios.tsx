"use client";

type ServiciosProps = {
  cambiarVista: (vista: string) => void;
};

export default function Servicios({
  cambiarVista,
}: ServiciosProps) {
  return (
    <section className="seccion servicios">
      <div className="encabezado">
        <span>SERVICES</span>

        <h2>NUESTROS SERVICIOS</h2>

        <p>
          Todo lo que necesitas para salir con un estilo
          diferente.
        </p>
      </div>

      <div className="servicios-grid">
        <article className="servicio-card">
          <div className="servicio-icono">✂</div>

          <h3>Corte de cabello</h3>

          <p>
            Cortes modernos y clásicos realizados por
            nuestros barberos.
          </p>
        </article>

        <article className="servicio-card">
          <div className="servicio-icono">🧔</div>

          <h3>Barba</h3>

          <p>
            Perfilado y arreglo de barba con acabado
            profesional.
          </p>
        </article>

        <article className="servicio-card">
          <div className="servicio-icono">★</div>

          <h3>Corte + Barba</h3>

          <p>
            El servicio completo para renovar tu estilo.
          </p>
        </article>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
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