import React from "react"
import './sidebar.css';
const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <li><a href="#home" style={{"color": "white"}}>Home</a></li>
                <li><a href="#news">Services</a></li>
                <li><a href="#contact">News</a></li>
                <li><a href="#about">Blog</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        </div>
    );
}

export default Sidebar