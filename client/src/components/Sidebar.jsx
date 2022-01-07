import React, {useEffect, useState} from 'react';
import './css/sidebar.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Sidebar = () =>
{
    const [cat,setCat] =useState([])

    useEffect(()=>
    {
        const getCats = async ()=>
        {
            const res = await axios.get("/category")
            setCat(res.data)
        }
        getCats().then();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideTitle">ABOUT</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" className="sidebarImage" />

                <p>
                    由黎志执导，毛晓彤、杨玏领衔主演的跨年首选电影
                    《以年为单位的恋爱》近日上映。由黎志执导，毛晓彤、杨玏领衔主演的跨年首选电影
                    《以年为单位的恋爱》近日上映。同时与影片一起发布的还有发布情感主题曲《失物招领》，
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cat.map(c=>(
                        <Link className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CONTACT</span>
                <ul className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook"/>
                    <i className=" sidebarIcon fab fa-twitter"/>
                    <i className=" sidebarIcon fab fa-instagram"/>
                    <i className=" sidebarIcon fab fa-google"/>
                    <i className=" sidebarIcon fas fa-envelope"/>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;
