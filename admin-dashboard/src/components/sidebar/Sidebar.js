import React from "react";
import "./Sidebar.css";
import { TbHexagonLetterD } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { CiWallet, CiDiscount1 } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import profile from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

const Sidebar = ({hideSidebar}) => {
  return (
    <div className="sidebar --p2">
      <div className="sidebar-header">
        <div className="sidebar-head --py">
          <TbHexagonLetterD className="icon" />
          <h3 className="sidebar-title --color-danger">Dashboard</h3>
        </div>

        <div className="close">
          <AiOutlineClose size={24} color="white" onClick={hideSidebar} />
        </div>

        <div className="sidebar-list">
          <div className="list-item --flex-start-all  --p">
            <MdOutlineAdminPanelSettings className="icon" size={20} />
            <p className="--text-light ">Dashboard</p>
          </div>
          <div className="list-item --flex-start-all  --p">
            <PiCodesandboxLogoLight className="icon" size={20} />
            <p className="--text-light ">Product</p>
          </div>
          <div className="list-item --flex-start-all  --p ">
            <AiOutlineUser className="icon" size={20} />
            <p className="--text-light ">Customers</p>
          </div>
          <div className="list-item --flex-start-all  --p ">
            <CiWallet className="icon" size={20} />
            <p className="--text-light ">Income</p>
          </div>
          <div className="list-item --flex-start-all  --p ">
            <CiDiscount1 className="icon" size={20} />
            <p className="--text-light ">Promote</p>
          </div>
          <div className="list-item --flex-start-all  --p ">
            <MdOutlineLiveHelp className="icon" size={20} />
            <p className="--text-light ">Help</p>
          </div>
        </div>
      </div>
      <div className="account --mb2 --p --card">
        <div className="profile-img">
          <img src={profile} alt="profile-img" />
        </div>
        <div className="profile-content">
          <h4 className="--text-light">Evano</h4>
          <p className="--text-light">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
