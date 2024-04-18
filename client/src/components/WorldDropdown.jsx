import Dropdown from 'react-bootstrap/Dropdown';

function WorldDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Find Your World
      </Dropdown.Toggle>

      <Dropdown.Menu className='world-menu'>
        <Dropdown.Item className='world-menu-item' a href="#/action-1">BeetleJuice</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-2">Bikini Bottom</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Dune</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Forgotten Realms</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Lord of the Rings</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Make Room!</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Roald Dahl</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Star Wars</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Stardew Valley</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Studi Ghibli</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">The Legend of Zelda</Dropdown.Item>
        <Dropdown.Item className='world-menu-item' href="#/action-3">Wizarding World</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default WorldDropDown;