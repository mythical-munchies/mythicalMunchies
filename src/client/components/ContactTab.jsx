import React, { useRef } from "react";
import "./styles/ContactTab.css";
import emailjs from "emailjs-com";

function ContactTab() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // the below are the service_id, template_id and public_id from emailJS
    emailjs
      .sendForm(
        "service_789sgt7",
        "template_wwxgva9",
        form.current,
        "fSn0aZCFGG6PquwLd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>Contact Us</h1>
          <hr></hr>
          <div className="content">
            {/* Text to the left of the form. Final language TBD */}
            <div className="textbox">
              <p>Thanks so much for checking out our page!</p>
              <br></br>
              <br></br>
              <p>
                Have any questions or concerns? We are happy to help. Please
                fill out the form below and we will get back to you as quickly
                as we can.
              </p>
            </div>

            {/* Div is for everything related to the form */}
            <form ref={form} onSubmit={sendEmail}>
              <label className="name"> Name:</label>
              <input type="text" name="name" />

              <label className="email">Email:</label>
              <input type="email" name="email" />

              <label className="message"> Message:</label>
              <textarea name="message" />

              <button className="send" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactTab;
