import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "../Product/EditProduct.css";
const EditProduct = () => {
  const { productDetails, getProductDetails, saveEditProduct } = useProduct();
  const [product, setProduct] = useState(productDetails);

  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleChange = (e) => {
    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };

  return (
    <Box className="pop">
      <Box
        style={{
          width: "70%",
          marginRight: "250px",
          marginLeft: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        className="img"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          className="div"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100%",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              textAlign: "center",
              lineHeight: "25px",
              fontWeight: "bold",
              color: "#4e4d4b",
            }}
          >
            Edit Character
          </p>
          <input
            style={{
              width: "80%",
              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.title}
            id="outlined-basic"
            name="title"
            label="Title"
            onChange={handleChange}
          />
          <input
            style={{
              width: "80%",

              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.desc || ""}
            id="outlined-basic"
            variant="outlined"
            name="desc"
            label="Description"
            onChange={handleChange}
          />
          <input
            style={{
              width: "80%",

              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.img || ""}
            id="outlined-basic"
            variant="outlined"
            name="img"
            label="Image"
            onChange={handleChange}
          />
          <input
            style={{
              width: "80%",

              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.region || ""}
            id="outlined-basic"
            variant="outlined"
            name="region"
            label="Region"
            onChange={handleChange}
          />
          <input
            style={{
              width: "80%",

              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.vision || ""}
            id="outlined-basic"
            variant="outlined"
            name="vision"
            label="Vision"
            onChange={handleChange}
          />
          <input
            style={{
              width: "80%",

              fontSize: "20px",
              marginTop: "15px",
              height: "50px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            value={product.weapon || ""}
            id="outlined-basic"
            variant="outlined"
            name="weapon"
            label="Weapon"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="success"
            className="btn"
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
            onClick={() => {
              saveEditProduct(params.id, product);
            }}
          >
            Save Character
          </Button>
        </div>
        <div className="about">
          Вы, наверное, заметили, что каждый раз, когда вы входите в Genshin
          Impact, главный экран меняется? Ну, если только вы не делали это
          всегда в одно и то же время суток. Разработчики постарались
          позаботиться о небольшой, но привлекающей внимание детали. Пейзаж на
          экране меняется в зависимости от времени в системе устройства, на
          котором мы играем. Он будет подстраиваться под время суток и
          отображать соответствующий движущийся фон. Существует четыре варианта:
          рассвет, утро, день/вечер и ночь.
        </div>
      </Box>
    </Box>
  );
};

export default EditProduct;
