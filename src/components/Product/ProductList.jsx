import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../Product/ProductList.css";

const ProductList = () => {
  const { products, getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = (page - 1) * 3;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  return (
    <div className="container-bg">
      <div className="products__conatiner">
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 10 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products ? (
            currentData().map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <ProductCard item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
