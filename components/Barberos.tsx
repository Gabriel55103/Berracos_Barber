"use client";

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
    <section className="seccion barberos">
      <div className="encabezado">
        <span>THE TEAM</span>

        <h2>NUESTROS BARBEROS</h2>

        <p>
          Profesionales preparados para darle forma a tu
          estilo.
        </p>
      </div>

      <div className="barberos-grid">
        {barberos.map((barbero, index) => (
          <article
            className="barbero-card"
            key={barbero.nombre}
          >
            <div
              className="barbero-imagen"
              style={{
                backgroundImage: `
                  linear-gradient(
                    180deg,
                    transparent 40%,
                    rgba(2, 6, 11, 0.9)
                  ),
                  url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80")
                `,
              }}
            />

            <div className="barbero-info">
              <span>
                BARBER 0{index + 1}
              </span>

              <h3>{barbero.nombre}</h3>

              <p>{barbero.especialidad}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}