import {
  AppBar,
  Button,
  Grid,
  Icon,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ProductList from "../components/Product/ProductList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(3),
  },
}));

function ProductPage() {
  const classes = useStyles();
  return (
    <>
      ProductPage
      <ProductList />
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-laabel="menu">
              <Icon />
            </IconButton>
            <Typography variant="h6">typedasf</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                log in
              </Button>
            </Box>
            <Button></Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,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)",
          }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPost}>
                  <Typography component="h1" color="inherit" gutterBottom>
                    Genshin
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero esse dolorum aliquid eos. Commodi dolorum tempore, ut
                    eos ab iste eius omnis harum, provident nostrum quod
                    deserunt, voluptas ea? Corporis.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
}

export default ProductPage;
