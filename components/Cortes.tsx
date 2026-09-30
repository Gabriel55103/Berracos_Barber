"use client";

type CortesProps = {
  cambiarVista: (vista: string) => void;
};

const cortes = [
  {
    nombre: "Low Fade",
    precio: "$250",
    descripcion:
      "Fade limpio y moderno con acabado profesional.",
  },
  {
    nombre: "Mid Fade",
    precio: "$280",
    descripcion:
      "Un corte equilibrado para un estilo moderno.",
  },
  {
    nombre: "Taper Fade",
    precio: "$300",
    descripcion:
      "Degradado elegante con detalles personalizados.",
  },
  {
    nombre: "Corte + Barba",
    precio: "$380",
    descripcion:
      "Corte completo acompañado de arreglo de barba.",
  },
];

export default function Cortes({
  cambiarVista,
}: CortesProps) {
  return (
    <section className="seccion cortes">
      <div className="encabezado">
        <span>OUR STYLE</span>

        <h2>CORTES POPULARES</h2>

        <p>
          Elige tu estilo y agenda tu próxima visita.
        </p>
      </div>

      <div className="cortes-grid">
        {cortes.map((corte, index) => (
          <article
            className="corte-card"
            key={corte.nombre}
          >
            <div className="corte-numero">
              0{index + 1}
            </div>

            <div className="corte-contenido">
              <h3>{corte.nombre}</h3>

              <p>{corte.descripcion}</p>

              <div className="corte-footer">
                <strong>{corte.precio}</strong>

                <button
                  className="boton"
                  onClick={() =>
                    cambiarVista("reservar")
                  }
                >
                  ELEGIR
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}