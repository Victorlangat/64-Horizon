// src/pages/PaymentConfirmationPage.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useRouter } from "next/router";

const PaymentConfirmationPage = () => {
  const router = useRouter();
  
  return (
    <DefaultLayout>
      <Box sx={{ height: "80vh", display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: "auto", textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Payment Confirmed
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your payment has been successfully processed.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thank you for your purchase!
          </Typography>
          <Typography variant="body1" gutterBottom>
            You will receive an email confirmation shortly.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you have any questions, please contact our support team.
          </Typography>
          <button
            onClick={() => router.push("/")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default PaymentConfirmationPage;
