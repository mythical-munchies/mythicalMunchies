import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./styles/AccountTab.css"

// STRETCH GOAL TO CREATE ROUTE PATH TO MODAL
const Account = ({ authenticate })=> {
  const [accountData, setAccountData] = useState({
    first: "",
    last: "",
    username: "",
    email: "",
    password:"",
    birthday:"",
    about: "",
  });

  const handleUpdate = (e) => {
    const { key, value } = e.target;
    setAccountData({...accountData, [key]: value});
  };

  const handleSubmit = (e) => {
    e.prevent.Default();
  }

    return (
      <>
      <div className="main-container">
        <div className="account-container">
            <div className="account-info">
              {/* <div className="buttons">
                <button className="account-buttons">Settings</button>
                <button className="account-buttons">Reviews</button>
                <button className="account-buttons">Favorites</button>
              </div> */}
            </div>
        </div>
      </div>
      </>
    );
};

export default Account