import React from "react";
import { useState } from "react";
import "../styles/Login.css"
import Modal from 'react-bootstrap/Modal';
import Logo from '../icons/cauldronyellow.png'

function SignUp () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return ( 
  <>
  {/* ACCOUNT - SIGN UP BUTTON */}
  <li className="sideBar-button">
    <a href="#" onClick={handleShow} className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
      <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd"/>
      </svg>
      <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
    </a>
  </li>
  
{/* MODAL */}
  <Modal  
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}>

{/* MODAL HEADER */}
  <Modal.Header closeButton>
    <div className="login-modal-header">
      <button id="close" onClick={handleClose}>
        <svg class="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
      </button>

      <div className="top">
        <img id="login-logo" src={Logo} alt="Mythical Munchies Logo" />
          <h3 className="login-welcome">
          Welcome to Mythical Munchies
          </h3>
        <p id="login-text">Register Here!</p>
      </div>
    </div>
  </Modal.Header>
    
{/* MODAL BODY  */}
    <Modal.Body>
      <div className="p-4 md:p-5">
        <form className="space-y-4" action="#">
            <div>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username or email" required />
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex justify-between">
              <div id="checky" className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                  <label id="login-check" htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sign up for our newsletter</label>
              </div>
              {/* <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a> */}
            </div>
            <button id="login-check" type="submit" className="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">Sign Up</button>

            <div id="login-check" className="text-sm font-medium text-gray-500 dark:text-gray-300">
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Already a member? Sign in!</a>
            </div>
        </form>
      </div>
    </Modal.Body>

{/* MODAL FOOTER */}
    <Modal.Footer>
      {/* <button onClick={handleClose} type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Close
      </button> */}
    </Modal.Footer>
  </Modal>
  </>

  );
};

export default SignUp;