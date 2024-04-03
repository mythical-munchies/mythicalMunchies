import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./styles/Login.css"
// import Account from "./Account"


const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const user = {
        email: "test@test.com",
        username: "mythicalMunchiesFan",
        password: "42069"
    };

    const submit = async(ev)=> {
        ev.preventDefault();
        
       if (usernameOrEmail === username.email || usernameOrEmail === user.username) {
        if (password === user.password) {
            console.log("Welcome Back!");
        } else {
            console.log("Wrong Password");
        }
       } else {
        console.log("Wrong Username or Email");
       }
    };

    return ( 
        <>
        <div className="main-container">
            <div className="container">
                <form onSubmit={submit}>
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