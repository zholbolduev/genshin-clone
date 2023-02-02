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
      <div class="card">
        <div
          className="wrapper__img"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <h5>{item.title}</h5>
        </div>
        <div className="card__title">
          {/* {user.email === "admin@admin.com" ? ( */}
          <CardActions
            sx={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{
                color: "white",
                textShadow:
                  "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
                zIndex: "1",
              }}
              // size="large"
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
            <Button
              style={{
                color: "white",
                textShadow:
                  "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
                zIndex: "1",
              }}
              // size="large"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              style={{
                color: "white",
                textShadow:
                  "0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff ",
                zIndex: "1",
              }}
              // size="large"
              onClick={() => navigate(`/products/${item.id}`)}
            >
              Details
            </Button>
          </CardActions>
          <IconButton onClick={() => addProductToCart(item)}>
            <FavoriteIcon
              sx={{
                zIndex: "1",
              }}
              size="large"
              color={checkProductInCart(item.id) ? "error" : ""}
            />
          </IconButton>
          {/* )}{" "} */}
        </div>
      </div>
      {/* <Card
        className="card"
        style={{
          backgroundColor: "rgb(6, 28, 37)",
          borderRadius: "5px",
          height: "140",
          margin: "20px 20px 20px 20px",
        }}
      >
        <CardMedia
          component="img"
          style={{ height: "250px", width: "180px" }}
          padding="20px 20px 0px 0px"
          image={item.img}
          alt={item.title}
        />
        <CardContent style={{ height: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#FFFFFF" }}
          >
            {item.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#FFFFFF" }}
          >
            {item.type}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: "#FFFFFF" }}
          >
            {item.price}
          </Typography>
        </CardContent>
        {user.email === "admin@admin.com" ? (
          <CardActions>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              Edit
            </Button>
          </CardActions>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <FavoriteIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </IconButton>
        )}
      </Card> */}
    </>
  );
};

export default ProductCard;
