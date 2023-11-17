import "./DestinationCard.scss";
import prague from "../../assets/images/Prague.svg";
import barcelona from "../../assets/images/Barcelona.svg";
import amsterdam from "../../assets/images/Amsterdam.svg";
// import venice from "../../assets/images/Venice.svg";
// import athens from "../../assets/images/Athens.svg";
// import paris from "../../assets/images/Paris.svg";
import { Link } from "react-router-dom";

const images = [prague, barcelona, amsterdam];

function DestinationCard({ destination }) {
  return (
    <article className="card">
      {destination.map((dest, index) => (
        <Link
          to="https://www.britishairways.com/en-gb/flights-and-holidays/flights"
          className="card__link"
        >
          <div key={index} className="card__wrapper">
            <img className="card__img" src={images[index]} alt="image" />
            <div className="card__text">
              <h2 className="card__title">{dest.name}</h2>
              <h3 className="card__price">{dest.price}</h3>
              <p className="card__description">{dest.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
}

export default DestinationCard;
