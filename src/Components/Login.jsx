import React from 'react'
import "../Styles/Login.css"
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <Navbar/>
    <div id="container">
        <div id="login_container">
            <h1 id="login_heading">LOGIN</h1>               
            <form id="login" onsubmit="check(event)">
                <p id="please_enter">Please enter your e-mail and password:</p>
                <input type="email" id="email" class="email" placeholder="E-mail" required/>
                <br/>
                <input type="password" id="password" class="email" placeholder="Password" required/>
                <br/>
                <button id="login_button" type="submit">LOGIN</button>
                <br/>
                <span id="no_account">Don't have an account?<a id="create_one" href="Signup.html">Create one</a></span>
            </form>
        </div>
    </div> 
    <hr className="breaker"/>
    <Footer/>
    </>
  )
}

export default Login