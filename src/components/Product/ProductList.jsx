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
      <div className="products__container">
        <Grid
          sx={{
            marginTop: "5%",
            backdropFilter: " blur(15px)",
            border: "2px gray solid",
            display: "flex",
            justifyContent: "baseline",
          }}
        >
          <FormControl sx={{ color: "white" }}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "white" }}
            >
              Choose a region
            </FormLabel>
            <RadioGroup
              sx={{ color: "white" }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => fetchByParams("region", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio sx={{ color: "white" }} />}
                label="All"
              />
              <FormControlLabel
                value="Mondstadt"
                control={<Radio sx={{ color: "white" }} />}
                label="Mondstadt"
              />
              <FormControlLabel
                value="Liyue"
                control={<Radio sx={{ color: "white" }} />}
                label="Liyue"
              />
              <FormControlLabel
                value="Inazuma"
                control={<Radio sx={{ color: "white" }} />}
                label="Inazuma"
              />
              <FormControlLabel
                value="Sumeru"
                control={<Radio sx={{ color: "white" }} />}
                label="Sumeru"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            sx={{ color: "white" }}
            id="input-with-icon-textfield"
            label="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Grid>
        <Box
          container
          spacing={{ sm: 2, md: 10 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "0 auto",
            width: "100%",
            gap: "4em",
          }}
        >
          {products ? (
            currentData().map((item) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                sx={{ margin: "0" }}
                key={item.id}
              >
                <ProductCard item={item} />
              </Grid>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>
        <Grid item md={12}>
          <Pagination
            sx={{ color: "white" }}
            count={count}
            variant="text"
            // color="stri"
            shape="rounded"
            page={page}
            onChange={(e, p) => setPage(p)}
          />
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
