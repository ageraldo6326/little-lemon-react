function CardSpecial({ picture, plato, precio, descripcion }) {
  return (
    <div className="card">
      <img src={picture} alt={plato} />
      <div className="headerCardSpecial">
        <span className="plato">{plato}</span>
        <span className="precio">{precio}</span>
      </div>
      <p className="description">{descripcion}</p>
      <p className="delivery">Order a delivery </p>
    </div>
  );
}

export default CardSpecial;
