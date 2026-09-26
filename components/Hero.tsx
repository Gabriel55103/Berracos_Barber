export default function Hero() {
  const gif =
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Barber-pole-02.gif";

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-1"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-2"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-3"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-4"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-5"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-6"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-7"
      />

      <img
        src={gif}
        alt="Barra de barbería animada"
        className="gif gif-8"
      />

      <div className="hero-contenido">
        <span className="hero-etiqueta">BARBER SHOP</span>

        <h1>
          BERRACOS <span>BARBER</span>
        </h1>

        <p>
          Cortes con estilo, precisión y actitud.
          <br />
          Tu imagen, nuestro trabajo.
        </p>

        <div className="hero-botones">
          <a href="#reservar" className="boton">
            RESERVAR CITA
          </a>

          <a href="#servicios" className="boton hero-boton-secundario">
            VER SERVICIOS
          </a>
        </div>
      </div>
    </section>
  );
}