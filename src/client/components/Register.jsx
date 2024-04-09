import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fontawesome/free-solid-svg-icons";
// import axios from '.api/axios'; will need to create an axios page so this works 

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrorMsg('');

    }, [user, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || v2) {
            setErrorMsg("You Shall Not Pass");
        return;
    }
    try{
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ user, password}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
            );
            //can take out console logs when connected to backend 
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs 
            //need value attribute on inputs for this 

            setUser('');
            setPassword('');
            setMatchPwd('');
    } catch(error) {
        if (!error?.response) {
            setErrorMsg('No server response');
        } else if (error.response?.status === 409) {
            setErrorMsg('Username Taken');
        } else {
            setErrorMsg('Registration Failed')
        }
        errRef.current.focus();
    }
    }


}