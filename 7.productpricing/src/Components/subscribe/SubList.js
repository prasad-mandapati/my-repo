import React from "react";
import "./SubList.css";
import Sub from "./Sub";
import { useState } from "react";
import { useEffect } from "react";

const SubList = () => {
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);

  const [yearly, setYearly] = useState(false);

  const handleToggle = () => {
    setYearly(!yearly);
  };

  const Calc = (num, per) => {
    return ((num * 12) / 100) * per;
  };

  useEffect(() => {
    if (yearly) {
      setBasic(Calc(basic, 70).toFixed(0));
      setPro(Calc(pro, 70).toFixed(0));
      setMaster(Calc(master, 70).toFixed(0));
    } else {
      setBasic(9.99);
      setPro(19.99);
      setMaster(29.99);
    }
  }, [yearly]);

  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h2>Pricing</h2>
          <div className="--line"></div>

          <div className="--flex-center --my2">
            <p>Monthly</p>
            <div className="--mx2">
              <span
                className={
                  yearly ? "toggle-btn toggle-btn-green" : "toggle-btn"
                }
                onClick={handleToggle}
              >
                <div className={yearly ? "ball ball-move" : "ball"}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans">
          <Sub
            plan={"Basic"}
            Theme={"theme1"}
            price={basic}
            isBasic={true}
            yearly={yearly}
            onBuy = {() => alert(basic)}
          />
          <Sub
            plan={"Pro"}
            Theme={"theme2"}
            price={pro}
            isPro={true}
            yearly={yearly}
            onBuy = {() => alert(pro)}
          />
          <Sub
            plan={"Master"}
            Theme={"theme3"}
            price={master}
            isMaster={true}
            yearly={yearly}
            onBuy = {() => alert(master)}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
