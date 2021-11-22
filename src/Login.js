import React from 'react'
import "./login.css"
function Login() {
    return (
        <div className="login">
            <div className="Sign_In">SIGN IN</div>
            <div className="sign_">
                <form className="sign_container">
                    <input  className="enter_sign" type="text" placeholder="Enter your Email"></input>
                    <input type="text" placeholder="Enter your password" className="enter_pass"></input>
                    <button className="button_sign">Sign In</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
