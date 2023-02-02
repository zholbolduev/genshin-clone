import { Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import CartItem from "./CartItem";
import bc from "../Product/image/1a4f9e2bd4d5f150161991ba73e7bb86.jpg";
const Cart = () => {
  const { cart, getCart, clearCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <h1>Likes</h1>
      <Container>
        <Paper sx={{ backgroundColor: "transparent" }}>
          {cart?.products.map((cartItem) => {
            {
              return (
                <CartItem
                  style={{
                    backgroundImage: `url(${bc})`,
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                    backgroundSize: "cover",
                    backgroundColor: "orange",
                    borderRadius: "20px",
                  }}
                  item={cartItem}
                  key={cartItem.item.id}
                />
              );
            }
          })}{" "}
        </Paper>
      </Container>
      <Container>
        <Button
          variant="contained"
          style={{ background: "green" }}
          onClick={clearCart}
        >
          Delete
        </Button>
        <Typography fontSize={21} style={{ color: "white" }}>
          {" "}
          Total Character: {cart?.totalPrice}
        </Typography>
      </Container>
    </>
  );
};

export default Cart;
