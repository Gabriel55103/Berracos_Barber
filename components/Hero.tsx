"use client";

type HeroProps = {
  cambiarVista: (vista: string) => void;
};

export default function Hero({ cambiarVista }: HeroProps) {
  return (
    <section className="hero">
      <div className="gif-fondo">
        <iframe
          src="https://tenor.com/embed/your-gif-id"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-contenido">
        <div className="hero-etiqueta">
          BARBER SHOP
        </div>

        <h1>
          BERRACOS
          <br />
          <span>BARBER</span>
        </h1>

        <p>
          Cortes con estilo, precisión y actitud.
          <br />
          Tu imagen, nuestro trabajo.
        </p>

        <div className="hero-botones">
          <button
            type="button"
            className="boton"
            onClick={() => cambiarVista("reservar")}
          >
            RESERVAR CITA
          </button>

          <button
            type="button"
            className="boton hero-boton-secundario"
            onClick={() => cambiarVista("cortes")}
          >
            VER CORTES
          </button>
        </div>

        <div className="inicio-navegacion">
          <button
            type="button"
            onClick={() => cambiarVista("servicios")}
          >
            SERVICIOS
          </button>

          <button
            type="button"
            onClick={() => cambiarVista("barberos")}
          >
            BARBEROS
          </button>

        

          <button
            type="button"
            onClick={() => cambiarVista("calendario")}
          >
            DISPONIBILIDAD
          </button>

          <button
            type="button"
            onClick={() => cambiarVista("ubicacion")}
          >
            UBICACIÓN
          </button>

          
        </div>
      </div>
    </section>
  );
}