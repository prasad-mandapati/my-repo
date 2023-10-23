import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Header = ({myTheme, handleToggle}) => {
  return (
    <header data-theme = {myTheme}>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="logo"  width={170} />
        </div>
        <nav >
          <ul className="--flex-between">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div onClick={handleToggle}>
          <span className="toggler">
            <BsFillMoonStarsFill size={18} color="white"/>
            <BsFillSunFill size={18} color="#333" />
            <div className={myTheme === "light" ? "ball" : "ball ball-right"}>

            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
