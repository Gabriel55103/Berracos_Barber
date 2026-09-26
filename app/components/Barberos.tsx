const barberos = [
  {
    nombre: "Jhonny",
    especialidad: "Fade & Beard",
  },
  {
    nombre: "Kevin",
    especialidad: "Taper & Diseño",
  },
  {
    nombre: "Andrés",
    especialidad: "Clásico & Tijera",
  },
];

export default function Barberos() {
  return (
    <section className="seccion barberos" id="barberos">
      <div className="encabezado">
        <span>THE TEAM</span>
        <h2>NUESTROS BARBEROS</h2>
      </div>

      <div className="barberos-grid">
        {barberos.map((barbero) => (
          <article className="barbero-card" key={barbero.nombre}>
            <div className="barbero-imagen"></div>

            <div className="barbero-info">
              <span>BARBER</span>

              <h3>{barbero.nombre}</h3>

              <p>{barbero.especialidad}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}