import React from "react";
import { Link } from "react-router-dom";
import "./styles/Error404.css";

function Error404() {
  return (
    <>
      <div className="gold-background">
        <Link to="/" className="back-button">
          Start Over
        </Link>
        <div className="missing">
          <h1>Magic Munchies are Missing!</h1>
        </div>
        <div>
          <h2>
            ✨ Looks like it vanished into thin air. Let's conjure up another
            dish instead!" 🍽️!
          </h2>
        </div>
        <div className="image">
          <Link to="https://www.nme.com/wp-content/uploads/2020/06/sean-bean-lord-of-the-rings.jpg">
            <img
              src="https://www.nme.com/wp-content/uploads/2020/06/sean-bean-lord-of-the-rings.jpg"
              alt="Sean Bean"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
