import React from "react";
import "./style.css";
const Cart = () => {
  const cartAction = () => {
    let cart = document.querySelector(".cart");
    if (cart.classList.contains("active")) {
      cart.classList.remove("active");
    } else {
      cart.classList.add("active");
    }
  };
  return (
    <>
      <i className="bx bx-shopping-bag" id="cart-icon" onClick={cartAction}></i>
      <div className="cart">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-content"></div>
        <div className="total">
          <div className="total-title">Tootal</div>
          <div className="total-price">$0</div>
        </div>
        {/* <!-- Buy Button --> */}
        <button type="button" className="btn-buy">
          Buy Now
        </button>
        {/* <!-- Cart Close --> */}
        <i className="bx bx-x" id="close-cart" onClick={cartAction}></i>
      </div>
    </>
  );
};

export default Cart;
