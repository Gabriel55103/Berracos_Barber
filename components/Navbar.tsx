"use client";

type NavbarProps = {
  cambiarVista: (vista: string) => void;
};

export default function Navbar({
  cambiarVista,
}: NavbarProps) {
  return (
    <nav className="navbar">
      <button
        className="navbar-logo"
        onClick={() => cambiarVista("inicio")}
      >
        BERRACOS<span>BARBER</span>
      </button>

      <ul className="navbar-links">
        <li>
          <button onClick={() => cambiarVista("inicio")}>
            INICIO
          </button>
        </li>

        <li>
          <button onClick={() => cambiarVista("servicios")}>
            SERVICIOS
          </button>
        </li>

        <li>
          <button onClick={() => cambiarVista("barberos")}>
            BARBEROS
          </button>
        </li>

        <li>
          <button onClick={() => cambiarVista("cortes")}>
            CORTES
          </button>
        </li>

        <li>
          <button onClick={() => cambiarVista("calendario")}>
            DISPONIBILIDAD
          </button>
        </li>

        <li>
          <button onClick={() => cambiarVista("ubicacion")}>
            UBICACIÓN
          </button>
        </li>

        <li>
          <button
            className="boton"
            onClick={() => cambiarVista("reservar")}
          >
            RESERVAR
          </button>
        </li>

        <li>
          <button
            className="navbar-login"
            onClick={() => cambiarVista("login")}
          >
            INICIAR SESIÓN
          </button>
        </li>
      </ul>
    </nav>
  );
}