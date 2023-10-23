import React, { useState } from "react";
import "./AuthContainer.css";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const handleLogin = () => {
    setAuth({login:true,register:false,reset:false,})
  }

  const handleRegister = () => {
    setAuth({login:false,register:true,reset:false,})
  }

const handleReset = () => {
  setAuth({login:false,register:false,reset:true,})
}

  return (
    <section className="--flex-center --100vh ">
      <div className="container box">
        {auth.login && <Login onregister={handleRegister} onreset={handleReset}/>}
        {auth.register && <Register onlogin={handleLogin}/>}
        {auth.reset && <Reset onlogin={handleLogin}/>}
      </div>
    </section>
  );
};

export default AuthContainer;
