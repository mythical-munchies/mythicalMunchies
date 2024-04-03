import React from "react";
// import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Account from "./Account"


const Login = ({ login }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async(ev)=> {
        ev.preventDefault();
        const credentials = {
            username, 
            email,
            password
        };
        await login(credentials);
        navigate('/account');
    }

    return ( 
        <form onSubmit={submit}>
            <input
            placeholder= 'username'
            value= {username}
            onChange= {ev => setUsername(ev.target.value)}
            />
            <input 
            placeholder= 'email'
            value= {email}
            onChange= {ev=> setEmail(ev.target.value)}
            />
            <input 
            placeholder= 'password'
            value= {password}
            onChange= {ev=> setPassword(ev.target.value)}
            />
            <button>Login</button>

            <br/><br/>
            <button>Favorites</button>
            <button>My Reviews</button>

        </form>
    );

};

export default Login;