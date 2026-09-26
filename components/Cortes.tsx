const cortes = [
  {
    nombre: "Low Fade",
    precio: "$250",
    descripcion: "Degradado bajo con acabado limpio y moderno.",
  },
  {
    nombre: "Mid Fade",
    precio: "$280",
    descripcion: "Degradado medio para un estilo equilibrado y definido.",
  },
  {
    nombre: "Taper Fade",
    precio: "$300",
    descripcion: "Acabado progresivo con detalles personalizados.",
  },
  {
    nombre: "Corte + Barba",
    precio: "$380",
    descripcion: "Corte profesional acompañado de arreglo de barba.",
  },
];

export default function Cortes() {
  return (
    <section className="seccion cortes">
      <div className="encabezado">
        <span>OUR STYLE</span>
        <h2>CORTES POPULARES</h2>
      </div>

      <div className="cortes-grid">
        {cortes.map((corte, index) => (
          <article className="corte-card" key={corte.nombre}>
            <div className="corte-numero">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="corte-contenido">
              <h3>{corte.nombre}</h3>

              <p>{corte.descripcion}</p>
            </div>

            <div className="corte-footer">
              <strong>{corte.precio}</strong>

              <a href="#reservar" className="boton">
                RESERVAR
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}