import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

function WorldDropDown({ worldsArray }) {
  // console.log( worldsArray )
  const [showDropdown, setShowDropdown] = useState(false);
  const [worlds, setWorlds] = useState([]);

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
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Find Your World
      </Dropdown.Toggle>

      <div>
        <Dropdown.Menu className="world-menu">
          {worlds.map((world) => {
            return (
              <Dropdown.Item key={world.id}
                className="world-menu-item"
                href={`/single-world/${world.id}`}
              >
                {world.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </div>
    </Dropdown>
  );
}

export default WorldDropDown;

{
  /* <Dropdown.Menu className='world-menu'>
        <Dropdown.Item className='world-menu-item' href={`/single-world/${world.id}`}>BeetleJuice</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Bikini Bottom</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Dune</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Forgotten Realms</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Lord of the Rings</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Make Room!</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Roald Dahl</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Star Wars</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Stardew Valley</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Studi Ghibli</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">The Legend of Zelda</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">Wizarding World</Dropdown.Item>
        
      </Dropdown.Menu> */
}
