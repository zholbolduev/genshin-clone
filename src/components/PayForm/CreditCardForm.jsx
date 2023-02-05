import React, { useState } from "react";
import useForm from "./UseForm";
import "../PayForm/CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  console.log(errors.message);
  const [donate, setDonate] = useState("");

  return (
    <div className="payFormPage">
      <Container component="main" maxWidth="xs">
        <Box className="formDiv">
          <div className="donate-form">
            <Typography
              sx={{
                color: "#3b4354",
                fontFamily: "Tahoma, Helvetica, Arial, sans-serif ",
                fontSize: "1.5rem",
              }}
            >
              Donate
            </Typography>
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="donate"
              type="number"
              label="How much to donate?"
              name="donate"
              value={donate}
              onChange={(e) => {
                setDonate(e.target.value);
              }}
              autoComplete="donate"
              autoFocus
            />
          </div>

          <div className="creditCard">
            <Cards
              cvc={values.cardSecurityCode}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextField
              type="text"
              id="cardName"
              data-testid="cardName"
              name="cardName"
              placeholder="Cardholder Name"
              value={values.cardName}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cname}
            />

            <TextField
              type="number"
              id="cardNumber"
              data-testid="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              value={values.cardNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />

            <TextField
              type="text"
              name="cardType"
              id="cardType"
              data-testid="cardType"
              placeholder="Card Type"
              value={values.cardType}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.ctype}
            />

            <TextField
              type="text"
              id="cardExpiration"
              data-testid="cardExpiration"
              name="cardExpiration"
              placeholder="Expiration Date"
              value={values.cardExpiration}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cexp}
            />

            <TextField
              type="number"
              id="cardSecurityCode"
              data-testid="cardSecurityCode"
              name="cardSecurityCode"
              placeholder="Security Code"
              value={values.cardSecurityCode}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.ccvv}
            />

            <TextField
              type="text"
              id="cardPostalCode"
              data-testid="cardPostalCode"
              name="cardPostalCode"
              placeholder="Postal Code"
              value={values.cardPostalCode}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cpostal}
            />
            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
              sx={{
                borderColor: "#3b4354",
                backgroundColor: "#3b4354",
                color: "white",
              }}
            >
              Validate
            </Button>
          </Box>
        </Box>
        <Alert
          severity="info"
          id="alertMessage"
          data-testid="alertMessage"
          variant={errors.variant}
          show={errors.show}
          sx={{ marginTop: "10px" }}
        >
          {errors.message}
        </Alert>
      </Container>
    </div>
  );
};

export default CreditCardForm;
