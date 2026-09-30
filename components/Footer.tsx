"use client";

type FooterProps = {
  cambiarVista: (vista: string) => void;
};

export default function Footer({
  cambiarVista,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div>
          <div className="footer-logo">
            BERRACOS<span>BARBER</span>
          </div>

          <p className="footer-descripcion">
            Cortes con estilo, precisión y actitud.
            Una barbería creada para quienes buscan
            algo diferente.
          </p>
        </div>

        <div>
          <h3>NAVEGACIÓN</h3>

          <div className="footer-links">
            <button
              onClick={() => cambiarVista("inicio")}
            >
              Inicio
            </button>

            <button
              onClick={() => cambiarVista("servicios")}
            >
              Servicios
            </button>

            <button
              onClick={() => cambiarVista("cortes")}
            >
              Cortes
            </button>

            <button
              onClick={() => cambiarVista("calendario")}
            >
              Disponibilidad
            </button>
          </div>
        </div>

        <div>
          <h3>CONTACTO</h3>

          <div className="footer-contacto">
            <p>
              📍 Libres, Puebla, México
            </p>

            <p>
              📞 222 000 0000
            </p>

            <p>
              Lunes a sábado
              <br />
              9:00 AM - 8:00 PM
            </p>

            <button
              className="boton"
              onClick={() =>
                cambiarVista("reservar")
              }
            >
              RESERVAR
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 BERRACOS BARBER · Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}