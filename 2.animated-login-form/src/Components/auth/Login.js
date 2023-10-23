import React, { useState } from "react";
import Loginimg from "../../assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({ onregister, onreset }) => {
  const [eye, setEye] = useState(false);

  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={Loginimg} alt="login" />
      </div>
      <div className="form-container --flex-center">
        <form action="" className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>
          <input type="text" className="--width-100" placeholder="Username" autoComplete="current-password" />
          <div className="password">
            <input
              type={eye ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              autoComplete="current-password"
            />
            <span onClick={() => setEye(!eye)} className="icon">
              {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible color="gray" />}
            </span>
          </div>

          <button className="--btn --btn-block --btn-primary">Login</button>
          <a href="#" className="--text-sm" onClick={onreset}>
            Forgot password?
          </a>
          <span className="--text-sm --block">
            Don't have an account?{" "}
            <a href="#" onClick={onregister}>
              Register
            </a>
          </span>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
