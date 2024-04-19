import React, { useRef } from "react";
import "../styles/ContactTab.css";
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

  // Something weird was happening with h1 where it wasn't accepting the h1 in the ContactTab.css so I'm adding a workaround here.
  const styles = {
    h1: {
      color: "#ffffff",
      fontFamily: "Almendra, serif",
      fontWeight: "normal",
      fontSize: "50px",
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="main-container">
        <div id="container">
          <h1 style={styles.h1}>Contact Us</h1>
          {/* <hr className="contact-hr"></hr> */}
          <div className="content">
            {/* Text to the left of the form. Final language TBD */}
            <div className="textbox">
              <p>💫 Hey there, seeker of splendid surprises on our page! 🦄 </p>
              <br></br>
              <br></br>
              <p>
                🍬 Got a query bubbling in your brain? A curiosity creeping in?
                Fear not! We're here to sprinkle some magic and answer all your
                musings. Simply shimmy down the form-filling trail, and we'll
                whisk you away with our prompt replies! 👉
              </p>
            </div>

            {/* Div is for everything related to the form */}
            <form id="formy" ref={form} onSubmit={sendEmail}>
              <label id="contact-form-labels" className="name"> Name:</label>
              <input type="text" name="name" placeholder="Name" />

              <label id="contact-form-labels" className="email">Email:</label>
              <input type="email" name="email" placeholder="Email" />

              <label id="contact-form-labels" className="message">Message:</label>
              <textarea
                id="contact-text-box"
                name="message"
                placeholder="Start Typing"
              />

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
