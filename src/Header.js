import React from 'react'
import "./header.css"
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <div className="logo">CARE</div>
            <div className="nav_elements">
                <Link to="Login/">
            <div className="sign">Sign In</div>
            </Link>
                    <div className="about">About Us</div>
                    <div className="help">Help</div>
                </div>
            </div>
    )
}

export default Header
