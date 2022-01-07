import React, {useContext, useRef} from 'react';
import './css/login.css'
import {Link} from "react-router-dom";
import {Context} from '../context/Context'
import axios from "axios";

const Login = () =>
{
    const userRef=useRef()
    const passwordRef =useRef()
    const {user,dispatch, isFetching} =useContext(Context)
    const handleSubmit= async (e)=>
    {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try
        {
            const res = await axios.post("http://localhost:5000/api/auth/login",{username:userRef, password:passwordRef})
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        }
        catch (e)
        {
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    console.log(isFetching)
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input className="loginInput" ref={userRef} type="text" placeholder="Enter your usermane..." />
          <label>Password</label>
          <input className="loginInput" ref={passwordRef} type="password" placeholder="Enter your password..." />
          <button className="loginButton" type="submit">Login</button>
        </form>
          <button className="loginRegisterButton">
              <Link className="link" to="/register">REGISTER</Link>
          </button>
      </div>
    );
}

export default Login;
