// src/pages/BookingSummaryPage.tsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useRouter } from "next/router";

const FormContainer = styled(Box)({
  width: "50%",
  margin: "auto",
  padding: "20px",
});

const BookingSummaryPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    phoneNumber: "",
  });
  const [seatsSelected, setSeatsSelected] = useState<string[]>(["A3", "B4"]); // Example seats selected
  const totalAmount = seatsSelected.length * 10; // Example price per seat
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit payment details
    alert("Payment details submitted successfully!");
    router.push("/confirmation");
  };

  return (
    <DefaultLayout>
      <Box sx={{ height: "80vh", display: "flex", alignItems: "center", pt:10 }}>
        <FormContainer>
          <Typography variant="h4" component="h1" gutterBottom>
            Payment Details
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Booking Summary
          </Typography>
          <Typography variant="body1" gutterBottom>
            Movie: The Godfather
          </Typography>
          <Typography variant="body1" gutterBottom>
            Theatre: Cinema 1
          </Typography>
          <Typography variant="body1" gutterBottom>
            Time: 7:00 PM
          </Typography>
          <Typography variant="body1" gutterBottom>
            Seats Selected: {seatsSelected.join(", ")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Amount: ${totalAmount}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name on Card"
              fullWidth
              name="name"
              value={paymentDetails.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Card Number"
              fullWidth
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Expiry Date (MM/YYYY)"
              fullWidth
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="CVV"
              fullWidth
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Phone Number"
              fullWidth
              name="phoneNumber"
              value={paymentDetails.phoneNumber}
              onChange={handleChange}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: "20px" }}
            >
              Pay Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ marginTop: "10px" }}
            >
              Pay with M-Pesa
            </Button>
          </form>
        </FormContainer>
      </Box>
    </DefaultLayout>
  );
};

export default BookingSummaryPage;
