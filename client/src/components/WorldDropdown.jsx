import Dropdown from 'react-bootstrap/Dropdown';

function WorldDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Find Your World
      </Dropdown.Toggle>

      <Dropdown.Menu className='world-menu'>
        <Dropdown.Item className='world-menu-item' href="/worlds/worldid">BeetleJuice</Dropdown.Item>
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
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default WorldDropDown;