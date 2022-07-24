import React, { useContext, useState } from "react";
import "../Styles/Login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success"); 
        console.log(res.token);
        auth.handleLogin(res.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      {/* <Navbar/> */}
      <div id="container">
        <div id="login_container">
          <h1 id="login_heading">LOGIN</h1>
          <form id="login" onSubmit={handleSubmit}>
            <p id="please_enter">Please enter your e-mail and password:</p>
            <input
              type="email"
              id="email"
              className="email"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={handleChange}      
              required
            />
            <br />
            <input
              type="password"
              id="password"
              class="email"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <br />
            <button id="login_button" type="submit">
              LOGIN
            </button>
            <br />
            <span id="no_account">
              Don't have an account?
              <Link id="create_one" to="/signup">
                Create one
              </Link>
            </span>
          </form>
        </div>
      </div>
      <hr className="breaker" />
      {/* <Footer/> */}
    </>
  );
};

export default Login;
