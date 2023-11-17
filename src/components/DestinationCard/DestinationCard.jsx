import "./DestinationCard.scss";

function DestinationCard() {
  return (
    <article className="card">
      <div className="card__wrapper">
        <img
          className="card__img"
          src="https://placehold.co/289x173"
          alt="image"
        ></img>
        <div className="card__text">
          <h2 className="card__title">PRAGUE</h2>
          <h3 className="card__price"> 0 dollars </h3>
          <p className="card__description">this place is cool</p>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
