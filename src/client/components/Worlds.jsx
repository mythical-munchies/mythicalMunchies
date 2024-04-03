import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Worlds.css";

function Worlds() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="gold-background">
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="dropbtn">
          Find Your World{" "}
          <i className="fas fa-chevron-down" style={{ marginLeft: "20px" }}></i>
        </button>

        {showDropdown && (
          <div className="dropdown-content">
            <a href="#">Studio Ghibli</a>
            <a href="#">Lord of the Rings</a>
            <a href="#">Potter World</a>
            <a href="#">Roald Dahl</a>
            <a href="#">Beetlejuice</a>
            <a href="#">GOT</a>
            <a href="#">Zelda</a>
            <a href="#">Spongebob Squarepants</a>
            <a href="#">Stardew</a>
            <a href="#">Star Wars</a>
            <a href="#">Dune</a>
            <a href="#">Make Room!</a>
          </div>
        )}
      </div>

      <div className="each-world">
        {/* Link to internal page */}
        {/* Studio Ghibli */}
        <Link to="/single-world" className="studio-ghibli-link">
          <img
            src="https://media.vogue.fr/photos/5dc59b122c63420008da9dab/2:3/w_2560%2Cc_limit/010_A7A13245_284.jpg"
            alt="Studio Ghibli"
            className="world-image"
          />
          <h3 className="world-title">Studio Ghibli</h3>
        </Link>
      </div>
      {/* Lord of the Rings */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg"
            alt="Lord of the Rings Cast"
            className="world-image"
          />
          <h3 className="world-title">LOTR</h3>
        </Link>
      </div>
      {/* Potter World */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://ew.com/thmb/yF648cwihcC596TnRn25tlf-Ot0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/harry-potter-key-art-1-504e85d692c24d34b4d590f919f03a62.jpg"
            alt="The Wizarding World of Harry Potter"
            className="world-image"
          />
          <h3 className="world-title">Potter World</h3>
        </Link>
      </div>
      {/* Roahl Dahl */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://i2-prod.walesonline.co.uk/whats-on/whats-on-news/article7742492.ece/ALTERNATES/s615/Matilda.jpg"
            alt="Roald Dahl"
            className="world-image"
          />
          <h3 className="world-title">Roald Dahl</h3>
        </Link>
      </div>
      {/* Beetlejuice */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="BeetleJuice"
            className="world-image"
          />
          <h3 className="world-title">Beetlejuice</h3>
        </Link>
      </div>
      {/* GOT */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Game of Thrones"
            className="world-image"
          />
          <h3 className="world-title">GOT</h3>
        </Link>
      </div>

      {/* Zelda */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Zelda"
            className="world-image"
          />
          <h3 className="world-title">Zelda</h3>
        </Link>
      </div>

      {/* SpongeBob */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Spongebob"
            className="world-image"
          />
          <h3 className="world-title">Spongebob Squarepants </h3>
        </Link>
      </div>
      {/* Stardew */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Stardew"
            className="world-image"
          />
          <h3 className="world-title">Stardew</h3>
        </Link>
      </div>

      {/* Star Wars */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Star Wars"
            className="world-image"
          />
          <h3 className="world-title">StarWars</h3>
        </Link>
      </div>
      {/* Dune */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Dune"
            className="world-image"
          />
          <h3 className="world-title">Dune</h3>
        </Link>
      </div>
      {/* Soylent Green */}
      <div className="each-world">
        {/* Link to internal page */}
        <Link to="/single-world">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Soylent Green"
            className="world-image"
          />
          <h3 className="world-title">Make Room!</h3>
        </Link>
      </div>
    </div>
  );
}

export default Worlds;