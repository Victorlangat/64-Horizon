// src/pages/SeatSelectionPage.tsx
import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useRouter } from "next/router";

const Seat = styled(Button)(({ theme }) => ({
  margin: "5px",
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  "&.selected": {
    backgroundColor: "#0A1F5F",
    color: "#fff",
  },
  "&.occupied": {
    pointerEvents: "none",
  },
  "&.available": {},
}));

const SeatSelectionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

const TicketSummaryContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  width: "80%",
  padding: "20px",
//   border: `1px solid ${theme.palette.divider}`,
  borderRadius: "10px",
//   backgroundColor: theme.palette.background.paper,
}));

const ProceedButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: "#0A1F5F",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0A1F5F",
  },
}));


const seatsLayout = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10"],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
  ];

const SeatSelectionPage = () => {
  const [selectedSeat, setSelectedSeat] = useState<string[]>([]);
  const [occupiedSeats] = useState<string[]>(["A3", "B4", "C2", "D5"]);
  const movieName = "The Godfather";
  const ticketPrice = 10; // Assume each ticket is $10
  const router = useRouter();

  const handleSeatClick = (seat: string) => {
    setSelectedSeat((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleProceed = () => {
    // Handle the proceed action, such as navigating to a payment page
    router.push("/payment");
};

  return (
    <DefaultLayout>
      <Box sx={{ height: "80vh", display: "flex", alignItems: "center" }}>
        <SeatSelectionContainer sx={{ pt: 20, m: "auto" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Select Your Seat
          </Typography>
          <Box>
            {seatsLayout.map((row, rowIndex) => (
              <Box
                key={rowIndex}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {row.map((seat) => (
                  <Seat
                    key={seat}
                    className={
                      occupiedSeats.includes(seat)
                        ? "occupied"
                        : selectedSeat.includes(seat)
                        ? "selected"
                        : "available"
                    }
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </Seat>
                ))}
              </Box>
            ))}
          </Box>
          <TicketSummaryContainer>
            <Typography variant="h6" component="h2">
              Ticket Summary
            </Typography>
            <Typography variant="body1">Movie: {movieName}</Typography>
            <Typography variant="body1">
              Selected Seats: {selectedSeat.join(", ")}
            </Typography>
            <Typography variant="body1">
              Total: ${selectedSeat.length * ticketPrice}
            </Typography>
            <ProceedButton variant="contained" onClick={handleProceed}>
              Proceed
            </ProceedButton>
          </TicketSummaryContainer>
        </SeatSelectionContainer>
      </Box>
    </DefaultLayout>
  );
};

export default SeatSelectionPage;
