import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useProduct } from "../../contexts/ProductContextProvider";
import "../Product/AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    title: "",
    desc: 0,
    img: "",
    region: "",
    vision: "",
    weapon: "",
  });

  const handleChange = (e) => {
    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };

  return (
    <Box className="add">
      <Box
        className="imgadd"
        style={{
          marginRight: "250px",
          marginLeft: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            marginRight: "50px",
            width: "400px",
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
            Add Character
          </p>
          <input
            placeholder="Title"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            variant="outlined"
            name="title"
            label="Title"
            onChange={handleChange}
          />
          <input
            placeholder="Descripton"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            variant="outlined"
            name="desc"
            label="Description"
            onChange={handleChange}
          />
          <input
            placeholder="Image"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            variant="outlined"
            name="img"
            label="Image"
            onChange={handleChange}
          />
          <input
            placeholder="Region"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            name="region"
            label="Region"
            onChange={handleChange}
          />
          <input
            placeholder="Vision"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            name="vision"
            label="Vision"
            onChange={handleChange}
          />
          <input
            placeholder="Weapon"
            style={{
              fontSize: "20px",
              marginTop: "5px",
              height: "30px",
              borderRadius: "10px",
              color: "#4e4d4b",
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            name="weapon"
            label="Weapon"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="success"
            className="addbtn"
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
            onClick={() => {
              addProduct(product);
            }}
          >
            Add Character
          </Button>
        </div>
        <div className="addab" style={{ marginRight: "15px" }}>
          В Genshin Impact есть особая валюта — примогены. Данную валюту игроки
          могут тратить на самый разный контент, однако мы настоятельно
          рекомендуем вкладывать ее только в призывы. Игра то и дело будет
          предлагать вам потрать ваши примогены, но ни в коем случае не
          соглашайтесь на эти предложения. Вероятность выпадения пятизвездочных
          героев составляет всего навсего 0,6%, а поэтому чем больше у вас
          примогенов — тем лучше.
        </div>
      </Box>
    </Box>
  );
};

export default AddProduct;
