import React, { useEffect, useState } from "react";
import registerimg from "../../assets/register.svg";
import { GoDotFill } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = ({ onlogin }) => {
  const [eye, setEye] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNum, setPassNum] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passSize, setPassSize] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  useEffect(() => {
    setPassLetter(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) ? true : false);
    setPassNum(pass.match(/[0-9]/) ? true : false);
    setPassChar(pass.match(/[!,@,#,$,%,^,&,*,~,?,_]/) ? true : false);
    setPassSize(pass.length > 7 ? true : false);
    setPassComplete(passLetter && passChar && passNum && passSize ? true : false)
    
  }, [pass,passChar,passNum,passLetter,passSize]);

  return (
    <div className="main-container --flex-center">
      <div className="form-container --flex-center">
        <form action="" className="--form-control ">
          <h2 className="--color-danger --text-center">Register</h2>
          <input
            type="text"
            className="--width-100"
            placeholder="Username"
            autoComplete="current-password"
          />
          <input
            type="email"
            className="--width-100"
            placeholder="Email"
            autoComplete="current-password"
          />
          <div className="password">
            <input
              type={eye ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              value={pass}
              onFocus={() => setShowIndicator(true)}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
            />
            <span onClick={() => setEye(!eye)} className="icon">
              {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible color="gray" />}
            </span>
          </div>

          <button disabled={!passComplete} className={passComplete ? "--btn --btn-block --btn-primary" : "--btn --btn-block --btn-disable"}>Register</button>
          <span className="--text-sm --block ">
            Have an account?
            <a href="#" onClick={onlogin}>
              Login
            </a>
          </span>
        </form>
        <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
          <ul className="--list-style-none --text-sm --p --card --bg-grey">
            <p>Password Strength Indicator</p>
            <li className={passLetter ? "--color-success" : "--color-danger"}>
              <span className="--flex-start">
                {passLetter ? <GiCheckMark /> : <GoDotFill />}
                &nbsp; LowerCase and UpperCase
              </span>
            </li>
            <li className={passNum ? "--color-success" : "--color-danger"}>
              <span className="--flex-start">
              {passNum ? <GiCheckMark /> : <GoDotFill />}
                &nbsp; Numbers (0-9)
              </span>
            </li>
            <li className={passChar ? "--color-success" : "--color-danger"}>
              <span className="--flex-start">
              {passChar ? <GiCheckMark /> : <GoDotFill />}
                &nbsp; Special Characters (!@#$%^&*)
              </span>
            </li>
            <li className={passSize ? "--color-success" : "--color-danger"}>
              <span className="--flex-start">
              {passSize ? <GiCheckMark /> : <GoDotFill />}
                &nbsp; At least 8 Characters
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="img-container">
        <img src={registerimg} alt="" />
      </div>
    </div>
  );
};

export default Register;
