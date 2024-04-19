import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "../styles/Login.css"
import Modal from 'react-bootstrap/Modal';
import Logo from '../icons/cauldronyellow.png'

// ELENIS IMPORTS
// import Button 
// import axios from "axios";
// import Account from "./Account"

function Login () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// ELENIS CODE 
    // const [usernameOrEmail, setUsernameOrEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState(false);
    
    return ( 
    <>
{/* ACCOUNT PAGE - SIGN IN BUTTON */}
        <li className="sideBar-button">
            <a href="#" onClick={handleShow} className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
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
                <p id="login-text">Lets get to cooking!</p>
                </div>
            </div>
        </Modal.Header>
    
{/* MODAL BODY */}
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
                            <label id="login-check" htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button id="login-check" type="submit" className="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-blue-800">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <a id="login-check" onClick={handleShow} href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Dont have an account? Sign up!</a>
                        {/* <button onClick={handleShow} className="text-blue-700 hover:underline dark:text-blue-500">Dont have an account? Sign up!</button> */}
                    </div>
                </form>
            </div>
        </Modal.Body>

{/* MODAL FOOTER */}
        <Modal.Footer>
            {/* <button onClick={handleClose} type="submit" className="text-white inline-flex items-center bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button> */}
        </Modal.Footer>
    </Modal>
    </>
    );
};

export default Login;

// ELENIS ORIGINAL CODE

// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();


//    useEffect(() => {
//     userRef.current.focus();
//    }, [])

//    useEffect(() => {
//     setError('');
//    }, [usernameOrEmail, password])

  
    // const loginHandler = async(ev)=> {
    //     ev.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({usernameOrEmail, password}),
    //             {
    //                 headers: {'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //             );
    //             console.log(JSON.stringify(response?.data));

    //             const accessToken = response?.data?.accessToken;
    //             const roles = response?.data?.roles;
    //             setAuth({ usernameOrEmail, password, roles, accessToken });
    //             setUsernameOrEmail('');
    //             setPassword('');
    //             setSuccess(true);

    //     } catch (error) {
    //         if (!error?.response) {
    //             setError('You Shall Not Pass');
    //         } else if (error.response?.status === 400) {
    //             setError('Missing Username or Password');
    //         } else if (error.response?.status === 401) {
    //             setError('You Shall Not Pass');
    //         } else {
    //             setError('Login Failed');
    //         }
    //     }
        
    //    if (usernameOrEmail === user.email || usernameOrEmail === user.username) {
    //     if (password === user.password) {
    //         console.log("Welcome Back!");
    //     } else {
    //         console.log("Wrong Password");
    //     }
    //    } else {
    //     console.log("Wrong Username or Email");
    //    }
    
        {/* {success ? (
            <section>
                <h2 className="welcome" style={{color: "red", font: "Almendra"}}>Welcome to Mythical Munchies</h2>
                <br/>
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
            <div className="main-container">
            <div className="small-container">
                <p ref={errRef} className={error ? "error" : "offscreen"} aria-live="assertive">{error}</p>
                <h3 className="cooking" style={{color: "blue", font: "Almendra"}}>Lets get to Cooking</h3>
                <h1>Sign In</h1>
                <form onSubmit={loginHandler} className="loginForm">
                    <div className="form">
                     x <label htmlFor="username">Username:</label>
                        <br/>
                        
                      
                        <img className="user" src="./icons/user.jpg" alt="user"/>
                        <label htmlFor="Email or Username">Email or Username</label>
                        <input
                        type= "text"
                        id="email or username"
                        placeholder= 'email or username'
                        ref={userRef}
                        autocomplete="off"
                        value= {usernameOrEmail}
                        onChange= {ev => setUsernameOrEmail(ev.target.value)}
                        required
                        />


                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password"
                        id="password"
                        placeholder= 'password'
                        value= {password}
                        onChange= {ev=> setPassword(ev.target.value)}
                        required
                        />
                        <br/><br/>
                        <button className="button" type="submit">Login</button>
                    </div
                    <br/><br/>
                </form>
                <p>
                    Create Account
                    <br />
                    <span className="line">
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </div>
        </div>    
        )}
        */}