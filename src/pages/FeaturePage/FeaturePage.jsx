import DestinationCard from "../../components/DestinationCard/DestinationCard";
import "./FeaturePage.scss";
import destinations from "../../data/destinations";

function FeaturePage() {
  const destinationsWithImages = destinations.map((destination) => ({
    ...destination,
    image: `${destination.name}.svg`,
  }));

  return (
    <main className="feature">
      <div className="feature__wrapper">
        <h1 className="feature__title">Book your flight today!</h1>
        <h2 className="feature__text">
          {" "}
          Check the destinations to redeem your voucher value of{" "}
          <span className="feature__price">£350</span> and let the adventure
          begin!
        </h2>
      </div>
      <section className="feature__container">
        <DestinationCard destination={destinationsWithImages} />
      </section>
    </main>
  );
}

export default FeaturePage;
