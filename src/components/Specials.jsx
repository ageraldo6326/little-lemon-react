import CardSpecial from "./CardSpecial";

function Specials() {
  return (
    <div className="card-container" id="menu" name="menu">
      <div className="specials">
        <h1>This weeks specials</h1>
        <button className="buttonCallToAction">Online Menu</button>
      </div>
      <div className="cards">
        <CardSpecial
          picture="/img/plato1.jpg"
          plato="Ensalada"
          precio="$20.00"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, ligula a posuere bibendum, lectus mauris posuere eros, pretium scelerisque enim neque eu urna. "
        />
        <CardSpecial
          picture="/img/plato2.jpg"
          plato="Brocheta"
          precio="$8.00"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, ligula a posuere bibendum, lectus mauris posuere eros, pretium scelerisque enim neque eu urna. "
        />
        <CardSpecial
          picture="/img/plato3.jpg"
          plato="Pastel"
          precio="$12.00"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, ligula a posuere bibendum, lectus mauris posuere eros, pretium scelerisque enim neque eu urna. "
        />
      </div>
    </div>
  );
}

export default Specials;
