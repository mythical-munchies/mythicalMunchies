import { Link } from "react-router-dom"
import WizHat from './icons/witchHat.png'
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Logo from './icons/cauldronyellow.png'


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

        <Link to="/account" onClick={handleShow} className='wizard-icon-nav'><img src={WizHat} alt="witch-hat icon"/></Link>
        <Modal  
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
          <Modal.Header closeButton>
            <div className="login-modal-header">
              <img id="login-logo" src={Logo} alt="Mythical Munchies Logo" />
                <h3 className="login-welcome">
                    Welcome to Mythical Munchies
                </h3>
                <p id="login-text">Lets get to cooking!</p>
            </div>
          </Modal.Header>
    
          <Modal.Body>
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username or email" required />
                </div>
                  <div>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                      </div>

                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Dont have an account? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500"> Sign up!</a>
                    </div>
          
                </form>
            </div>

    </Modal.Body>

    <Modal.Footer>
    <button onClick={handleClose} type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Close
          </button>

          {/* <button id="submit" type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            Submit Review
          </button> */}
    </Modal.Footer>
</Modal>
      </div>
    </>
  );
}

export default Nav;