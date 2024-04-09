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

  
    const submit = async(ev)=> {
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
        <div className="main-container">
            <div className="small-container">
                <form onSubmit={loginHandler} className="loginForm">
                    <div className="form">
                        <h2 className="welcome" style={{color: "red", font: "Almendra"}}>Welcome to Mythical Munchies</h2>
                        <br/>
                        <h3 className="cooking" style={{color: "blue", font: "Almendra"}}>Lets get to Cooking</h3>
                        <br/>
                        <img className="user" src="../icons/user.jpg" alt="user"/>
                        {/* <label htmlFor="Email or Username">Email or Username</label> */}
                        <input
                        type= "text"
                        placeholder= 'email or username'
                        value= {usernameOrEmail}
                        onChange= {ev => setUsernameOrEmail(ev.target.value)}
                        />
                    
                        <input 
                        placeholder= 'password'
                        value= {password}
                        onChange= {ev=> setPassword(ev.target.value)}
                        />
                        <br/><br/>
                        <button className="button" type="submit">Login</button>
                    </div>

                    <br/><br/>
            

                </form>
            </div>
        </div>    
        </>

    );

};

export default Login;