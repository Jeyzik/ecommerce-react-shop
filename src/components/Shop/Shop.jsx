import React from "react";
import "./style.css";

const Shop = ({ imgUrl, title, price }) => {
  return (
    <div className="product-box">
      <img src={imgUrl} alt="product" className="product-img" />
      <h2 className="product-title">{title}</h2>
      <span className="price">${price}</span>
      <i className="bx bx-shopping-bag add-cart"></i>
    </div>
  );
};

export default Shop;
