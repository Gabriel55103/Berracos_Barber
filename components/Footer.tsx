export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div>
          <a href="#inicio" className="footer-logo">
            BERRACOS <span>BARBER</span>
          </a>

          <p className="footer-descripcion">
            Estilo, precisión y actitud. Tu imagen, nuestro trabajo.
          </p>
        </div>

        <div className="footer-links">
          <h3>ENLACES</h3>

          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#barberos">Barberos</a>
          <a href="#reservar">Reservar</a>
          <a href="#ubicacion">Ubicación</a>
        </div>

        <div className="footer-contacto">
          <h3>CONTACTO</h3>

          <p>Av. Principal #00-00</p>
          <p>Libres, Puebla, México</p>
          <p>Lunes a sábado</p>
          <p>9:00 AM - 8:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 BERRACOS BARBER</span>

        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}