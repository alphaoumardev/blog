import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";
import "./css/single.css";

import React from 'react';

const Single = () =>
{
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;

