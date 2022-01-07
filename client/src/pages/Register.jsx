import React, {useState} from 'react';
import './css/register.css'
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () =>
{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
    const [error, setError]=useState(false)


    const handleSubmit= async (e)=>
    {
        try
        {
            e.preventDefault()
            setError(false)
            const res = await axios.post("/auth/register",{username, email,password})
            res.data.window.location.replace("/login")
            console.log(res)
        }
        catch (e)
        {
            console.log(e);
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerInput" type="text" onChange={e=>setUsername(e.target.value)} placeholder="Enter your username..." />
                <label>Email</label>
                <input className="registerInput" type="text" onChange={e=>setEmail(e.target.value)} placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerInput" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter your password..." />
                <button className="registerButton" type="submit">Register</button>
            </form>
          <button className="registerLoginButton">
              <Link className="link" to="/login">LOGIN</Link>
          </button>
            {error&&(<span style={{color:'red', margin:'10px'}}>Something went wrong</span>)}
      </div>
    );
}
export default Register;
