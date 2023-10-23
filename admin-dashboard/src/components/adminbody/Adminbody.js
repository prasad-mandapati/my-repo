import React from "react";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import Bargraph from "../graphs/Bargraph";
import Donutgraph from "../graphs/Donutgraph";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Adminbody.css";
import ProductsList from "../products/ProductsList";

const Adminbody = ({ handleSidebar }) => {
  return (
    <div className="admin-container --bg-grey --width-100 --mh-100vh">
      <div className="header --width-100">
        <Header handleSidebar={handleSidebar} />
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div className="graph-container">
        <div className="--card --p2 --bg-light">
          <div className="--flex-between --width-100">
            <div className="graph-title">
              <h2>Overview</h2>
              <p>Monthly Earnings</p>
            </div>
            <div className="bargraph-filter --flex-between">
              <select id="">
                <option value="Quarterly">Quarterly</option>
              </select>
              <RiArrowDropDownLine className="droparrow" />
            </div>
          </div>
          <div className="--flex-center">
            <Bargraph/>
          </div>
        </div>
        <div className="--card --p2 --bg-light">
          <div className="--flex-between --width-100">
            <div className="graph-title">
              <h2>Overview</h2>
              <p>Monthly Earnings</p>
            </div>
          </div>
          <div className="--flex-center">
            <Donutgraph />
          </div>
        </div>
      </div>
      <div className="products-container ">
        <ProductsList />
      </div>
    </div>
  );
};

export default Adminbody;
