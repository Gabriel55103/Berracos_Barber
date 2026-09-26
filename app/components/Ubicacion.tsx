export default function Ubicacion() {
  return (
    <section className="seccion ubicacion-seccion" id="ubicacion">
      <div className="encabezado">
        <span>LOCATION</span>
        <h2>ENCUÉNTRANOS</h2>
      </div>

      <div className="ubicacion-card">
        <div className="ubicacion-info">
          <div className="ubicacion-icono">📍</div>

          <span className="ubicacion-label">NUESTRA UBICACIÓN</span>

          <h3>BERRACOS BARBER</h3>

          <p>Av. Principal #00-00</p>

          <p>Libres, Puebla, México</p>

          <div className="horario">
            <span>HORARIO</span>

            <p>Lunes a sábado</p>

            <p>9:00 AM - 8:00 PM</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="boton boton-ubicacion"
          >
            VER UBICACIÓN
          </a>
        </div>

        <div className="ubicacion-mapa">
          <div className="mapa-overlay">
            <span>BERRACOS BARBER</span>
            <strong>LIBRES, PUEBLA</strong>
          </div>
        </div>
      </div>
    </section>
  );
}