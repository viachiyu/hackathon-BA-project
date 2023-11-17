import "./HomePage.css";
import { useState } from "react";
import Close from "../../assets/icons/down-arrow 2.svg";
import SubmitEmailModal from "../../components/SubmitEmailModal/SubmitEmailModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div className="homepage">
        <div className="homepage__hero">
          <div className="homepage__calender"></div>
        </div>
      </div>
      <footer className="footer">
        <p>
          We have extended the expiry date of our eVouchers to September 2024
        </p>
        <p>See where your voucher can take you</p>
        <button
          src={Close}
          alt="icon"
          className="voucher"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Check your voucher
        </button>
      </footer>

      {openModal && <SubmitEmailModal closeModal={setOpenModal} />}
    </>
  );
}
export default Home;
