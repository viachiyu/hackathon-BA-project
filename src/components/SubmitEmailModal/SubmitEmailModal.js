import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import the navigate function if using React Routerx
import Close from "../../assets/icons/header_cross 1.svg";
import "./Modal.css";
import error from "../../assets/icons/down-arrow.svg";
import users from "../../data/users";
import vouchers from "../../data/vouchers";

function SubmitEmailModal({ closeModal }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    emailRequired: false,
    invalidEmail: false,
    noUserFound: false,
    noVoucher: false,
    voucherUsed: false,
    submitError: false,
  });
  const [email, setEmail] = useState("");

  const [modalMessage, setModalMessage] = useState({
    title: `Your eVouchers`,
    text: `Unsure whether you've got an eVoucher to use or how much you've
  got to spend? Enter your email address below to check.`,
  });
  let isUserFound = false;
  let foundUser = {};
  let foundVoucher = {};

  const handleChange = (event) => {
    const email = event.target;
    setEmail(email.value);
  };

  const isEmailValid = () => {
    if (!email.includes("@")) {
      return false;
    }
    return true;
  };
  const validateForm = () => {
    const emailValid = isEmailValid();
    setErrors({
      emailRequired: !email.email,
      invalidEmail: email.email && !emailValid,
      noUserFound: false,
      noVoucher: false,
      voucherUsed: false,
      submitError: false,
    });
    return emailValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    users.forEach((user) => {
      if (user.email === email) {
        isUserFound = true;
        foundUser = user;
        return foundUser;
      }
    });

    if (!isUserFound) {
      setErrors({
        ...errors,
        noUserFound: true,
      });
      setModalMessage({
        title: "No eVouchers",
        text: `It seems like there are no vouchers linked to this email. No
        worries - plenty of exciting flight deals await!`,
      });
      return;
    }

    const findVoucher = () => {
      vouchers.forEach((voucher) => {
        if (foundUser.voucher_id === voucher.id) {
          foundVoucher = voucher;
          return foundVoucher;
        }
      });
      if (!foundVoucher) {
        setErrors({
          ...errors,
          noVoucher: true,
        });
        return;
      }

      if (foundVoucher.isUsed === true) {
        setErrors({
          ...errors,
          voucherUsed: true,
        });
        return;
      }
      return setTimeout(navigate("/feature"), 4000);
    };
    findVoucher();
  };

  return (
    <div className="submitmodal__background">
      <div className="submitmodal__container">
        <div className="submitmodal__exit--container">
          <button
            className="submitmodal__exit"
            type="button"
            onClick={() => closeModal()}
          >
            <img src={Close} alt="close icon" className="submitmodal__close" />
          </button>
        </div>
        <div className="submitmodal__title">
          <p className="modal_title">{modalMessage.title}</p>
          <p className="modal_text">{modalMessage.text}</p>
        </div>
        <div className="submitmodal__body">
          <input
            type="text"
            name="email"
            value={email.email}
            id="contact_email"
            onChange={handleChange}
            placeholder="Email Address"
            className={`details__input ${
              errors && !email.email ? "" : "details__input--invalid"
            }`}
          />
          {errors.emailRequired && (
            <div className="details__error-container">
              <img src={error} className="details__icon" />
              <p className="details__error">This field is required</p>
            </div>
          )}
        </div>
        <button
          className="submitmodal__submit"
          type="button"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default SubmitEmailModal;
