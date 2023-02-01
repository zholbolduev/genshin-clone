import {
  Button,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import "../Cart/CartItem.css";
const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    <Grid container spacing={5} alignItems="center" className="cart">
      <div
        style={{
          display: "flex",
          height: "40vh",
        }}
      >
        <Grid item>
          <Box
            style={{
              display: "flex",
              borderRadius: "15px",
            }}
            component="img"
            sx={{
              height: 200,
              width: 400,
            }}
            src={item.item.img}
            alt={item.item.title}
          />
        </Grid>
        <Grid item>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{
              fontSize: "30px",
              marginLeft: "20px",
              marginTop: "75px",
            }}
          >
            {item.item.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{ fontSize: "30px", marginLeft: "20px", marginTop: "75px" }}
          >
            {item.item.type}
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "75px" }}>
          <Typography
            variant="p"
            color="text.secondary"
            style={{ fontSize: "30px", marginLeft: "20px" }}
          >
            Price: {item.item.price}
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "75px" }}>
          <Typography
            variant="p"
            color="text.secondary"
            style={{ fontSize: "30px", marginLeft: "20px" }}
          >
            Quantity:{" "}
            <input
              style={{ height: "20px", width: "20px" }}
              type="number"
              min={1}
              max={100}
              value={item.count}
              onChange={(e) => {
                changeProductCount(e.target.value, item.item.id);
              }}
            ></input>
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "75px" }}>
          <Typography
            variant="p"
            color="text.secondary"
            style={{ fontSize: "30px", marginLeft: "20px" }}
          >
            SubPrice: {item.subPrice}
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "75px" }}>
          <Button
            style={{ marginLeft: "20px" }}
            variant="outlined"
            size="large"
            onClick={() => deleteCartProduct(item.item.id)}
          >
            Delete
          </Button>
        </Grid>
      </div>
    </Grid>
  );
};

export default CartItem;
