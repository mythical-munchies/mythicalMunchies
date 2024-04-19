import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Worlds.css";
// import "../index.css"
import WorldDropDown from "./WorldDropdown";

const Worlds = ({ worldsArray }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [worlds, setWorlds] = useState([]);

  // this useEffect is to map over the array for DropDown
  useEffect(()=> {
    const fetchWorlds = async() => {
      const response = await fetch ('https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/');
      const json = await response.json();
      console.log(json)
      setWorlds(json);
    };
    fetchWorlds();
  }, []);

  return (
    <div className="gold-background">
      <div className="dropdown">
        <div>
          <WorldDropDown worldsArray={worlds}  />
        </div>
      </div>

      
{/* THESE ARE THE WORLDS */}
      {worldsArray.map((world) => {
        return (
          <div key={world.id} className="each-world">
            <Link to ={`/single-world/${world.id}`} className="world-page-title">
              <img src={world.img_url} alt="" className="world-image" loading="lazy" />
              <h3 className="world-page-title">{world.name}</h3>
            </Link>
          </div>
        );
      })} 
    </div>
  );
};

export default Worlds;

// SIMONES PLACEHOLDER CODE
      {/* Lord of the Rings
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg"
            alt="Lord of the Rings Cast"
            className="world-image"
          />
          <h3 className="world-page-title">LOTR</h3>
        </Link>
      </div>
      Potter World
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://ew.com/thmb/yF648cwihcC596TnRn25tlf-Ot0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/harry-potter-key-art-1-504e85d692c24d34b4d590f919f03a62.jpg"
            alt="The Wizarding World of Harry Potter"
            className="world-image"
          />
          <h3 className="world-page-title">Potter World</h3>
        </Link>
      </div>
      Roahl Dahl
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://i2-prod.walesonline.co.uk/whats-on/whats-on-news/article7742492.ece/ALTERNATES/s615/Matilda.jpg"
            alt="Roald Dahl"
            className="world-image"
          />
          <h3 className="world-page-title">Roald Dahl</h3>
        </Link>
      </div>
      Beetlejuice
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="BeetleJuice"
            className="world-image"
          />
          <h3 className="world-page-title">Beetlejuice</h3>
        </Link>
      </div>
      GOT
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Game of Thrones"
            className="world-image"
          />
          <h3 className="world-page-title">GOT</h3>
        </Link>
      </div>

      Zelda
      <div className="each-world" >
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Zelda"
            className="world-image"
          />
          <h3 className="world-page-title">Zelda</h3>
        </Link>
      </div>

      SpongeBob
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Spongebob"
            className="world-image"
          />
          <h3 className="world-page-title">Spongebob Squarepants </h3>
        </Link>
      </div>
      Stardew
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Stardew"
            className="world-image"
          />
          <h3 className="world-page-title">Stardew</h3>
        </Link>
      </div>

      Star Wars
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Star Wars"
            className="world-image"
          />
          <h3 className="world-page-title">StarWars</h3>
        </Link>
      </div>
      Dune
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Dune"
            className="world-image"
          />
          <h3 className="world-page-title">Dune</h3>
        </Link>
      </div>
      Soylent Green
      <div className="each-world">
        Link to internal page
        <Link to="/single-world" className="world-page-title">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/beetlejuice-1539197409.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"
            alt="Soylent Green"
            className="world-image"
          />
          <h3 className="world-page-title">Make Room!</h3>
        </Link>
      </div> */}

            {/* {/* Lord of the Rings TEST TO SEE RECIPE PAGE*/}
        {/* <div className="each-world">
         
          <Link to="/single-world" className="world-page-title">
            <img
              src="https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg"
              alt="Lord of the Rings Cast"
              className="world-image"
            />
            <h3 className="world-page-title">LOTR</h3>
          </Link>
        </div> */}

            {/* <a href="#">Studio Ghibli</a>
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
            <a href="#">Make Room!</a> */}

