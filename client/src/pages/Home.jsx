import React from 'react';
import Header from '../components/Header';
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import './css/home.css'

const Home = () =>
{
    return (
        <div>
            <>
                <Header/>
                <div className="home">
                    <Post/>
                    <Sidebar/>
                </div>
            </>
        </div>
    );
}

export default Home;
