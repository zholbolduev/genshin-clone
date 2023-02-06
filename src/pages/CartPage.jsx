import React from "react";
import Cart from "../components/Cart/Cart";
import back from "../components/Product/image/blue.jpg";

const CartPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,

        backgroundSize: "1580px ",
      }}
    >
      <Cart />
    </div>
  );
};

export default CartPage;
