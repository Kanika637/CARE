import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="logo">CARE</div>
            <div className="nav_elements">
            <div className="sign">Sign In</div>
                    <div className="about">About Us</div>
                    <div className="help">Help</div>
                </div>
            </div>
    )
}

export default Header
