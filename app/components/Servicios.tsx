const servicios = [
  {
    icono: "✂",
    nombre: "Corte de Cabello",
    descripcion:
      "Corte personalizado realizado por nuestros barberos profesionales.",
    precio: "$250",
  },
  {
    icono: "🪒",
    nombre: "Arreglo de Barba",
    descripcion:
      "Perfilado, recorte y acabado de barba para un estilo impecable.",
    precio: "$180",
  },
  {
    icono: "★",
    nombre: "Corte + Barba",
    descripcion:
      "Servicio completo de corte de cabello y arreglo profesional de barba.",
    precio: "$380",
  },
];

export default function Servicios() {
  return (
    <section className="seccion servicios" id="servicios">
      <div className="encabezado">
        <span>SERVICES</span>
        <h2>NUESTROS SERVICIOS</h2>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <article className="servicio-card" key={servicio.nombre}>
            <div className="servicio-icono">{servicio.icono}</div>

            <h3>{servicio.nombre}</h3>

            <p>{servicio.descripcion}</p>

            <strong>{servicio.precio}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}