import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import the navigate function if using React Routerx
import Close from "../../assets/icons/down-arrow.svg";
import "./Modal.css";
import error from "../../assets/icons/down-arrow.svg";

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
  const [email, setEmail] = useState({
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail({ ...email, [name]: value });
  };
  const isEmailValid = () => {
    if (!email.email.includes("@")) {
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:8080/api/users",
        email
      );
      if (!response.data) {
        setErrors({
          ...errors,
          noUserFound: true,
        });
      } else {
        // Destructure directly if you're not using the whole response object
        const { hasVoucher, voucherUsed } = response.data;
        if (!hasVoucher) {
          setErrors({
            ...errors,
            noVoucher: true,
          });
        } else if (voucherUsed) {
          setErrors({
            ...errors,
            voucherUsed: true,
          });
        } else {
          const voucherResponse = await axios.get(
            `http://localhost:8080/api/vouchers?email=${email.email}`
          );

          if (voucherResponse.status === 201) {
            navigate("/suggestions");
            setTimeout(() => {
              navigate("/features");
            }, 4000);
          }
        }
      }
    } catch (error) {
      console.error(error);
      setErrors({
        ...errors,
        submitError: true,
      });
    }
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
          <p>You're eVouchers</p>
          <p>
            Unsure whether you've got an eVoucher to use or how much you've got
            to spend? Enter your email address below to check.
          </p>
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
          {errors.invalidEmail && (
            <div className="details__error-container">
              <img src={error} className="details__icon" />
              <p className="details__error">Please enter a valid email</p>
            </div>
          )}
          {errors.noUserFound && (
            <div className="details__error-container">
              <img src={error} className="details__icon" />
              <p className="details__error">No user found</p>
            </div>
          )}
          {errors.noVoucher && (
            <div className="details__error-container">
              <img src={error} className="details__icon" />
              <p className="details__error">No voucher for this user</p>
            </div>
          )}
          {errors.voucherUsed && (
            <div className="details__error-container">
              <img src={error} className="details__icon" />
              <p className="details__error">Voucher has been used up</p>
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