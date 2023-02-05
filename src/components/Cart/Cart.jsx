import { Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import CartItem from "./CartItem";
import bc from "../Product/image/yellow.jpg";
const Cart = () => {
  const { cart, getCart, clearCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
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
          style={{ background: "red", marginBottom: "80px" }}
          onClick={clearCart}
        >
          Delete
        </Button>
      </Container>
    </>
  );
};

export default Cart;
