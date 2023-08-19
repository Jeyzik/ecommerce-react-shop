import React from "react";
import "./style.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import item from "./cartItem.json";
function App() {
  const renderItems = () => {
    return item.map((obj, index) => (
      <Shop
        imgUrl={obj.imgUrl}
        title={obj.title}
        price={obj.price}
        key={index}
      />
    ));
  };

  return (
    <div>
      <Header />
      {/* <!-- Shop --> */}
      <section className="shop container">
        <h2 aria-label="section-title">Shop Products</h2>
        <div className="shop-content">{renderItems()}</div>
      </section>
    </div>
  );
}

export default App;
