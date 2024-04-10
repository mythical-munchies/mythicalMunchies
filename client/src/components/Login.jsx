import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./styles/Login.css"
// import axios from "axios";

// import Account from "./Account"

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
   
   useEffect(() => {
    userRef.current.focus();
   }, [])

   useEffect(() => {
    setError('');
   }, [usernameOrEmail, password])

  
    const loginHandler = async(ev)=> {
        ev.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({usernameOrEmail, password}),
                {
                    headers: {'Content-Type': 'application/json' },
                    withCredentials: true
                }
                );
                console.log(JSON.stringify(response?.data));

                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
                setAuth({ usernameOrEmail, password, roles, accessToken });
                setUsernameOrEmail('');
                setPassword('');
                setSuccess(true);

        } catch (error) {
            if (!error?.response) {
                setError('You Shall Not Pass');
            } else if (error.response?.status === 400) {
                setError('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setError('You Shall Not Pass');
            } else {
                setError('Login Failed');
            }
        }
        
    //    if (usernameOrEmail === user.email || usernameOrEmail === user.username) {
    //     if (password === user.password) {
    //         console.log("Welcome Back!");
    //     } else {
    //         console.log("Wrong Password");
    //     }
    //    } else {
    //     console.log("Wrong Username or Email");
    //    }
    };

    return ( 
        <>
        {success ? (
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
                        {/* <label htmlFor="Email or Username">Email or Username</label> */}
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
                    </div>

                    <br/><br/>
            

                </form>
                <p>
                    Create Account
                    <br />
                    <span className="line">
                        {/* put router link here  */}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </div>
        </div>   

        )}
         
        </>

    );

};

export default Login;