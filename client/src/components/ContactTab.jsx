import React, { useState } from "react";
import "./styles/ContactTab.css";

function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error sending email. Please try again later.");
    }
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
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="name">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="message">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button className="send" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactTab;