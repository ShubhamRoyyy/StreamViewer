import "./Card.css";

function Card({
  icon,
  title,
  subtitle,
  value,
  type = "status",
  borderColor,
  background,
}) {
  return (
    <div
      className="card"
      style={{
        borderColor,
        background,
      }}
    >
      <div className="card-top">

        <div
          className="card-icon"
          style={{
            color: borderColor,
          }}
        >
          {icon}
        </div>

        <div className="card-info">

          <h3>{title}</h3>

          {type === "status" ? (
            <div className="live-row">
              <span>LIVE</span>
              <div className="live-dot"></div>
            </div>
          ) : (
            <>
              <h1>{value}</h1>
              <p>{subtitle}</p>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default Card;