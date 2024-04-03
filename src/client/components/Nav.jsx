import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <div className="navs">
        <Link className="navbar-link" to="/">Home</Link>

        <Link className="navbar-link" to="/worlds">Recipes</Link>

        <Link className="navbar-link" to="/contact">Contact</Link>

        <Link to="/account" className='wizard-icon-nav'><img src="./icons/witchHat.png" alt="witch-hat icon"/></Link>
      </div>
    </>
  );
}

export default Nav;