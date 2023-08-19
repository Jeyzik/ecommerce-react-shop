import React from "react";
import "./style.css";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <header>
      <div className={"nav container"}>
        <a href="#" className="logo">
          Ecommerce
        </a>
        {/* <!-- Cart --> */}
        <Cart />
      </div>
    </header>
  );
};

export default Header;
