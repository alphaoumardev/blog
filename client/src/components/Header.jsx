import React from 'react';
import './css/header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="titlesm">React & Vue</span>
                <span className="titlelg">Blogs</span>
                <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="headerImage" />

            </div>
            
        </div>
    );
}

export default Header;
