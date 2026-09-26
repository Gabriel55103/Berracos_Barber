export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        BERRACOS <span>BARBER</span>
      </a>

      <nav>
        <ul className="navbar-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#barberos">Barberos</a>
          </li>
          <li>
            <a href="#reservar">Reservar</a>
          </li>
          <li>
            <a href="#ubicacion">Ubicación</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}