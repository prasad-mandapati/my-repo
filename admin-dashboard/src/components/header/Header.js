import React from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import {HiMenu} from "react-icons/hi"

const Header = ({handleSidebar}) => {

  return (
    <div className="--width-100 --p2">
      <div className="menu">
        <HiMenu size={24} onClick={() => handleSidebar()}/>
      </div>
      <div className="header">
      <h2>Hello Shahrukh 👋🏽</h2>
      <div className="search-container --px --card">
        <BsSearch className="--mr" color="grey" size={15}/>
        <input type="search" name="" id="" placeholder="Search" />
      </div>
      </div>
    </div>
  );
};

export default Header;
