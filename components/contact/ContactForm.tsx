"use client";
import { SyntheticEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast("Message send successfully!");

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    notify();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }
  return (
    <div className="col-12 col-lg-7 col-xl-6">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        id="frmContactus"
        className="contact__form alt_form px-4 px-lg-8"
      >
        <h3 className="contact__title mb-7 mb-md-10 mb-lg-15">Enquiry Form</h3>
        <div className="d-flex gap-3 gap-sm-5 gap-lg-8 flex-column">
          <div className="row gap-3 gap-sm-0">
            <div className="col-sm-6">
              <div className="single-input">
                <input
                  type="text"
                  className="fs-six-up"
                  name="fname"
                  value={firstName}
                  placeholder="Fast Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-input">
                <input
                  type="text"
                  className="fs-six-up"
                  name="lname"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row gap-3 gap-sm-0 ">
            <div className="col-sm-6">
              <div className="single-input">
                <input
                  type="email"
                  className="fs-six-up"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-input">
                <input
                  type="number"
                  className="fs-six-up"
                  name="Phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-single">
            <textarea
              className="fs-six-up"
              name="message"
              rows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <span id="msg"></span>
        <button
          type="submit"
          className="cmn-btn py-3 px-5 px-lg-6 mt-8 mt-lg-10 d-flex ms-auto"
          name="submit"
          id="submit"
        >
          Send Message<i className="bi bi-arrow-up-right"></i>
          <span></span>
        </button>
        <ToastContainer position="bottom-left" />
      </form>
    </div>
  );
}
