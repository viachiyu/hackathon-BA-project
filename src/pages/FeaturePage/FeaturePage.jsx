import DestinationCard from "../../components/DestinationCard/DestinationCard";
import "./FeaturePage.scss";

function FeaturePage() {
  return (
    <main className="feature">
      <div className="feature__wrapper">
        <h1 className="feature__title">Book your flight today!</h1>
        <h2 className="feature__text">
          {" "}
          Check the destinations to redeem your voucher value of £350 and let
          the adventure begin!
        </h2>
      </div>
      <section className="feature__container">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </section>
    </main>
  );
}
export default FeaturePage;
