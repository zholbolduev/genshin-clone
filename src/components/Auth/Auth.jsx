import React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./auth.css";

const theme = createTheme();

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogOut,
  } = useAuth();
  return (
    <div className="authPage">
      {" "}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#3b4354",
                fontFamily: "Tahoma, Helvetica, Arial, sans-serif ",
                fontSize: "1.5rem",
              }}
            >
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{ color: "#636e84" }}
                label="Remember me"
              />

              {hasAccount ? (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderColor: "#636e84",
                    backgroundColor: "#636e84",
                  }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderColor: "#3b4354",
                    backgroundColor: "#3b4354",
                  }}
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              )}

              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <Grid item xs sx={{ width: "50%" }}>
                  <Link
                    href="https://account.hoyoverse.com/?source=v1.webLogin#/forgetPassword?lang=en-us"
                    target="_blank"
                    variant="body2"
                    sx={{
                      textDecoration: " none",
                      cursor: "pointer",
                      color: "#7f858a",
                      fontSize: "1rem",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{ width: "50%" }}>
                  {hasAccount ? (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      sx={{
                        textDecoration: " none",
                        cursor: "pointer",
                        color: "#7f858a",
                        fontSize: "1rem",
                      }}
                    >
                      Register
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                      sx={{
                        textDecoration: " none",
                        cursor: "pointer",
                        color: "#7f858a",
                        fontSize: "1rem",
                      }}
                    >
                      Log in
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Auth;
