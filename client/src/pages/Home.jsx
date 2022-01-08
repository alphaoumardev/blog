import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import './css/home.css'
import {useLocation} from "react-router-dom";
import axios from "axios";

const Home = () =>
{
    const [posts, setPosts] = useState([]);
    const {search}= useLocation()

    useEffect(()=>
    {
        const fetchPosts =async  ()=>
        {
            const res = await axios.get("/posts" + search);
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts().then();
    },[search])

    return (
        <div>
            <>
                <Header/>
                <div className="home" >
                    <Posts posts={posts}/>
                    <Sidebar/>
                </div>
            </>
        </div>
    );
}

export default Home;
