import { Link } from "react-router-dom"
import WizHat from '../icons/witchHat.png'
import { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
  <div className="navs">
    <Link className="navbar-link" to="/">Home</Link>
    <Link className="navbar-link" to="/worlds">Recipes</Link>
    <Link className="navbar-link" to="/contact">Contact</Link>
    <Link to="/account" className='wizard-icon-nav'><img src={WizHat} alt="witch-hat icon"/></Link>
  </div>
  </>

  );
}

export default Nav;