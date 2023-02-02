import { Button, Divider } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import "../Product/ProductDetails.css";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProduct();
  const { addProductToCart } = useCart();
  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  let regionImg = "";
  if (productDetails.region === "Mondstadt") {
    regionImg =
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281985438.jpg";
  } else if (productDetails.region === "Liyue") {
    regionImg =
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200526/2020052612332536813.jpg";
  } else if (productDetails.region === "Inazuma") {
    regionImg =
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071516524062780.jpg";
  } else if (productDetails.region === "Sumeru") {
    regionImg =
      "https://webstatic.hoyoverse.com/upload/contentweb/2022/08/15/ab72edd8acc105904aa50da90e4e788e_3591306224895288914.jpg";
  }

  console.log(productDetails);
  return (
    <div
      className="details-background"
      style={{ backgroundImage: `url(${regionImg})` }}
    >
      <div
        className="details__img"
        style={{ backgroundImage: `url(${productDetails.img})` }}
      ></div>
      <div className="details__content">
        <h2 className="details__title">{productDetails.title}</h2>

        <div className="details__info">
          <div className="details__info-top">
            <div className="details__info-spec">
              <h5>Vision</h5>
              <p>{productDetails.vision}</p>
            </div>
            <div className="details__info-spec">
              <h5>Weapon</h5>
              <p>{productDetails.weapon}</p>
            </div>
            <div className="details__info-spec">
              <h5>Region</h5>
              <p>{productDetails.region}</p>
            </div>
          </div>
          <Divider
            sx={{
              borderColor: "rgb(208, 168, 92)",
            }}
          />
          <div className="details__info-bottom">
            <p>{productDetails.desc}</p>
          </div>
        </div>
        <Button
          sx={{
            marginTop: "10px",
            color: " rgb(208, 168, 92)",
            border: "1px gray solid",
            backdropFilter: " blur(8px)",
          }}
          onClick={() => addProductToCart(productDetails)}
        >
          Add to Liked
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
