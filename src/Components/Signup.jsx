import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "../Styles/Signup.css"

const Signup = () => {
  const {state} = useContext(AuthContext)
  return (
    <div>
        <div id="container">
            <div id="create_container">
                <header id="heading">
                    <h1 id="create_account">CREATE ACCOUNT</h1>
                    <p id="complete_form">Complete the form below to create a bluemercury.com account.</p>
                </header>
                <form id="form" >
                    <input type="email" id="email" class="input" placeholder="Email*" required />
                    <input type="text"  id="first_name" class="input" placeholder="First Name*" required/>
                    <input type="text" id="last_name" class="input" placeholder="Last Name*" required/>
                    <input type="password" id="password" class="input" placeholder="Password*" required/>
                    <input type="date" id="birthday" class="input" placeholder="Birthday*" required/>
                    <p id="input_required">*Indicates Required Field</p>
                
                <div id="checkbox_join_container">
                    <div id="flex1">
                        <input type="checkbox" name="" id="input"/>
                    </div>
                    <div id="flex2">
                        <p id="join">join</p>
                        <p id="bluerewards">BLUEREWARDS</p>
                    </div>
                    <div id="flex3">
                        <p id="offers_signup">Earn $10 for every $250px spend, plus FREE birthday gifts & treatments!</p>
                    </div>
                </div>
                <div>
                    <p id="privacy_policy">To learn more about how we use your information and your rights, see <a href="Signup.html">Privacy Note</a></p>
                </div>
                <button id="create_account_btn" type="submit" >CREATE ACCOUNT</button>

                <div>
                    <span id="already_account">
                        Already have a bluemercury.com account?
                        <Link id="sign_in" to="/login">Sign In</Link>
                    </span>
                </div>
            </form>
            </div>        
        </div>        
    </div>

  )
}

export default Signup