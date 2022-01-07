import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Post from "../components/Post";
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
            const res = await axios.get("http://localhost:5000/api/posts" + search);
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
                    <Post posts={posts}/>
                    <Sidebar/>
                </div>
            </>
        </div>
    );
}

export default Home;
