import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Search from "../search/Search";
import Product from "./Product";
import Categories from "../categories/Categories";
import { products as productData } from "../../products-data";

const allCategories = new Set(productData.map((product) => product.category));

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState(["all", ...allCategories]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(productData);
      return;
    }

    setFilteredProducts(productData.filter(
        (product) => product.category === category
      ));
  };

  useEffect(() => {
    console.log(search)
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--text-center --color-white">
            <span className="--color-danger">Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search search={search} handleSearch={handleSearch} />
            <Categories
              categories={categories}
              filterCategory={filterCategory}
            />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <div className="--flex-center --100vh">
              <h3 className="--color-danger">No Product Found !!!</h3>
            </div>
          ) : (
            filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <Product
                    img={product.img}
                    title={product.title}
                    price={product.price}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
