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
        <div className="content">
          <p className="title">
            We have extended the expiry date of our eVouchers to September 2024
          </p>
          <p className="subhead">See where your voucher can take you</p>
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
        </div>
      </footer>

      {openModal && <SubmitEmailModal closeModal={setOpenModal} />}
    </>
  );
}
export default Home;
