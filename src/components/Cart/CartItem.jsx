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
import bc from "../Product/image/violet.jpg";
import { red } from "@mui/material/colors";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    <Grid
      container
      spacing={8}
      alignItems="center"
      style={{ paddingTop: "220px" }}
    >
      <div
        className="ss"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: `url(${bc})`,
          backgroundSize: "750px",
          // backgroundColor: "black",
          marginLeft: "25%",
          width: "60%",
          margin: "50px ",
          borderRadius: "15px",
        }}
      >
        <Grid item>
          <Box
            style={{
              borderRadius: "15px",
            }}
            component="img"
            sx={{
              height: "90%",
              width: "99%",
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
              color: "white",
              fontSize: "30px",
            }}
          >
            {item.item.title}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="p"
            color="text.secondary"
            component="div"
            style={{
              fontSize: "30px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {item.item.region}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="p"
            color="text.secondary"
            component="div"
            style={{
              fontSize: "30px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {item.item.vision}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="p"
            component="div"
            color="text.secondary"
            style={{
              fontSize: "30px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {item.item.weapon}
          </Typography>
        </Grid>

        <Grid item>
          <Button
            component="div"
            style={{ marginTop: "15px", marginBottom: "50px" }}
            variant="outlined"
            color="error"
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
