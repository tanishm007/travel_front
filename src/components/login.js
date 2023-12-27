import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser}) => {
    
    const navigate = useNavigate();
 

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://travel-back-ff8w.onrender.com/login", user)
        .then(res => {
            alert(res.data.message)
            localStorage.setItem('name',res.data.user.name);
            localStorage.setItem('logout','Logout');
            setLoginUser(res.data.user)
            localStorage.setItem('login',true);
            localStorage.setItem('user_data',res.data.user);
            navigate('/')
        })
    }

    const logout = () => {
        // Remove login details from local storage
        localStorage.removeItem('login');
        // Optional: perform any additional logout logic
        setLoginUser({});
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder=""></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login