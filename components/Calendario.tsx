const dias = [
  { numero: 21, estado: "pasado" },
  { numero: 22, estado: "pasado" },
  { numero: 23, estado: "ocupado" },
  { numero: 24, estado: "disponible" },
  { numero: 25, estado: "disponible" },
  { numero: 26, estado: "disponible" },
  { numero: 27, estado: "ocupado" },
  { numero: 28, estado: "ocupado" },
  { numero: 29, estado: "disponible" },
  { numero: 30, estado: "disponible" },
];

export default function Calendario() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button type="button">‹</button>

        <h3>SEPTIEMBRE 2026</h3>

        <button type="button">›</button>
      </div>

      <div className="calendar-week">
        <span>LUN</span>
        <span>MAR</span>
        <span>MIÉ</span>
        <span>JUE</span>
        <span>VIE</span>
        <span>SÁB</span>
        <span>DOM</span>
      </div>

      <div className="calendar-days">
        {dias.map((dia) => (
          <button
            type="button"
            key={dia.numero}
            className={`calendar-day ${dia.estado}`}
            disabled={
              dia.estado === "ocupado" ||
              dia.estado === "pasado"
            }
          >
            {dia.numero}
          </button>
        ))}
      </div>

      <div className="calendar-legend">
        <span>
          <i className="available"></i>
          Disponible
        </span>

        <span>
          <i className="busy"></i>
          Ocupado
        </span>
      </div>
    </div>
  );
}