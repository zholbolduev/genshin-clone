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
import bc from "../Product/image/10d5480e8c0f3b8c1f7cda78c36f29f3.jpg";
import { red } from "@mui/material/colors";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     backgroundColor: "orange",
    //     height: "fit-content",
    //   }}
    // >
    //   <Box
    //     sx={{ border: "2px red solid", width: "20%", height: "200px" }}
    //   ></Box>
    //   <Box
    //     sx={{ border: "2px red solid", width: "20%", height: "200px" }}
    //   ></Box>
    //   <Box
    //     sx={{ border: "2px red solid", width: "20%", height: "200px" }}
    //   ></Box>
    //   <Box
    //     sx={{ border: "2px red solid", width: "20%", height: "200px" }}
    //   ></Box>
    //   <Box
    //     sx={{ border: "2px red solid", width: "20%", height: "200px" }}
    //   ></Box>
    // </Box>

    <Grid container spacing={3} alignItems="center">
      <div
        className="ss"
        style={{
          display: "flex",
          // height: "40px",
          backgroundImage: `url(${bc})`,

          // backgroundColor: "black",
          width: "1100px",
          margin: "50px ",
          borderRadius: "15px",
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
              color: "white",
              fontSize: "30px",
              marginLeft: "20px",
              marginTop: "75px",
            }}
          >
            {item.item.title}
          </Typography>
        </Grid>
        {/* <Grid item>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{
              color: "white",

              fontSize: "30px",
              marginLeft: "20px",
              marginTop: "75px",
            }}
          >
            {item.item.desc}
          </Typography>
        </Grid> */}
        <Grid item>
          <Typography
            variant="p"
            color="text.secondary"
            component="div"
            style={{
              fontSize: "30px",
              marginLeft: "20px",
              color: "white",
              marginTop: "75px",
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
              marginLeft: "20px",
              color: "white",
              marginTop: "75px",
            }}
          >
            {item.item.vision}
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "75px" }}>
          <Typography
            variant="p"
            component="div"
            color="text.secondary"
            style={{
              fontSize: "30px",
              marginLeft: "20px",
              color: "white",
              marginTop: "75px",
            }}
          >
            {item.item.weapon}
          </Typography>
        </Grid>
        {/* <Grid item style={{ marginTop: "75px" }}> */}
        {/* <Typography
            variant="p"
            style={{ fontSize: "30px", marginLeft: "20px", color: "white" }}
          >
            <input
              style={{ height: "20px", width: "20px", color: "white" }}
              value={item.vision}
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
            style={{ fontSize: "30px", marginLeft: "20px", color: "white" }}
          >
            SubPrice: {item.subPrice}
          </Typography>
        </Grid> */}
        <Grid item>
          <Button
            component="div"
            style={{ marginLeft: "20px", marginTop: "75px" }}
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
