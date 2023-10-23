import React from "react";
import "./Sub.css";

const Sub = ({plan, Theme, price, isBasic, isPro, isMaster, yearly, onBuy}) => {
  return (
    <div
      className="price-box --card
    "
    >
      <div className={`box --p2 ${Theme}`}>
        <p className="--text-light">{plan}</p>

        <h4 className="--text-light">
          <span>$</span>
          <span className="basic">{price}</span>

          {yearly && (
          <p className="--text-light">
            <del>30% off</del>
          </p>
        )}
        </h4>
        
        {isPro && <p className="--text-light">Everything is Pro, Plus</p> }
        {isMaster && <p className="--text-light">Everything is Master, Plus</p> }
      </div>

      <div className="features">
        <ul>
          {isBasic && <li>unlimeted Pages</li>}
          {isBasic && <li>Unlimeted BandWidth</li>}
          {isBasic && <li>500GB Storage </li>}
          
          {isPro && <li>10 Backup</li>}
          {isPro && <li>Email Support</li>}
          {isPro && <li>GitHub Tool</li>}
          
          {isMaster && <li>20 Backups</li>}
          {isMaster && <li>Push Notifications</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>

        <button className={`btn ${Theme}`} onClick={onBuy}>Buy Now</button>
      </div>
    </div>
  );
};

export default Sub;
