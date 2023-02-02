import React from "react";
import Cart from "../components/Cart/Cart";
import back from "../components/Product/image/blue.jpg";

const CartPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Cart />
    </div>
  );
};

export default CartPage;
