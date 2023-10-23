import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import "./product.css";
import { tr } from "faker/lib/locales";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, []);
  return (
    <div className="products-table --bg-light --card">
      <div
        className="--flex-between --p2 --bg-light --width-100"
        style={{borderBottom:"1px solid gray",position:"sticky",top:"0"}}
      >
        <div className="graph-title">
          <h2>Product Sell</h2>
        </div>
        <div className="--flex-between" style={{ flexBasis: "40%" }}>
          <div className="search-container --px --card">
            <BsSearch className="--mr" color="grey" size={15} />
            <input type="search" name="" id="" placeholder="Search" />
          </div>
          <div className="bargraph-filter --flex-between">
            <select>
              <option value="Quarterly">Quarterly</option>
            </select>
            <RiArrowDropDownLine className="droparrow" />
          </div>
        </div>
      </div>
      <div>
        <table className="--width-100 --px2">
          <thead className="--p2">
            <th className="--width-60" style={{ textAlign: "left" }}>
              Product Name
            </th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </thead>
            {products.map((item) => {
              return (
                <tr>
                  <td className="--flex-start">
                    <div className="thumbnail-container">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div
                      style={{ textAlign: "left" }}
                      className="product-content --px2"
                    >
                      <h4 style={{fontSize:"2rem"}}>{item.title}</h4>
                      <p style={{ fontSize: "1.5rem" }}>{item.description}</p>
                    </div>
                  </td>
                  <td>{item.stock}</td>
                  <td>{item.price}</td>
                  <td>{item.discountPercentage}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
