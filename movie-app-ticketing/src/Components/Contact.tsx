// components/ContactUs.tsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const OuterContainer = styled(Box)({
  background: "rgb(10,31,95)",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 0",
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#001232',
  color: '#fff',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  maxWidth: '500px',
  width: "90vw",
  animation: 'fadeInDown 0.5s ease-out', // Added animation
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
  '& .MuiInputBase-root': {
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#f50057',
  '&:hover': {
    backgroundColor: '#ff4081',
  },
  marginTop: '20px',
  padding: '10px 20px',
});

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(form);
  };

  return (
    <OuterContainer>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <StyledTextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <StyledButton variant="contained" color="primary" type="submit">
          Submit
        </StyledButton>
      </FormContainer>
    </OuterContainer>
  );
};

export default ContactUs;
