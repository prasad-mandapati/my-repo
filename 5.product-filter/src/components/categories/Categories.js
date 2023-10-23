import React from "react";
import "./Categories.css";
const Categories = ({ categories, filterCategory }) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="btn --btn --btn-secondary"
            onClick={() => filterCategory(category)}
          >
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
