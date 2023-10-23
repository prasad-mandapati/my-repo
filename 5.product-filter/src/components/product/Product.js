import React from "react";
import "./Product.css"
const Product = (props) => {
  return (
    <div className="product-item --card">
      <img src={props.img} alt="" />
      <div className="--bg-primary --center-all --p">
        <h3 className="--text-light">{props.title}</h3>
        <div className="--flex-between --width-100">
          <p className="--text-light ">{props.price}</p>
          <button className="--btn --btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
