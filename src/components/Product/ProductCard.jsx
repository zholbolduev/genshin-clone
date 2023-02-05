import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../Product/productCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div
          className="wrapper__img"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <h5>{item.title}</h5>
        </div>

        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            // maxWidth: "calc(60vh / 1.5)",
            marginTop: "5%",
            padding: "0",
          }}
        >
          {user.email === "admin@admin.com" ? (
            <Button
              style={{
                color: "white",
                textShadow:
                  "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
                zIndex: "1",
                width: "20%",
                padding: "0",
                fontSize: "calc(5px + 1vw)",
              }}
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
          ) : null}

          {user.email === "admin@admin.com" ? (
            <Button
              style={{
                color: "white",
                textShadow:
                  "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
                zIndex: "1",
                width: "20%",
                padding: "0",
                fontSize: "calc(5px + 1vw)",
              }}
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
          ) : null}
          <Button
            style={{
              color: "white",
              textShadow:
                "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
              zIndex: "1",
              width: "20%",
              padding: "0",
              fontSize: "calc(5px + 1vw)",
            }}
            onClick={() => navigate(`/products/${item.id}`)}
          >
            Details
          </Button>
        </div>
        <IconButton onClick={() => addProductToCart(item)}>
          <FavoriteIcon
            sx={{
              zIndex: "1",
            }}
            size="large"
            color={checkProductInCart(item.id) ? "error" : ""}
          />
        </IconButton>
      </div>
    </>
  );
};

export default ProductCard;
