// components/Footer.tsx
import * as React from "react";
import { Box, Typography, IconButton, Container, Grid, Link } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContainer = styled(Box)({
  backgroundColor: "#000",
  color: "#fff",
  padding: "40px 0",
  width: "100%",
});

const SocialMediaContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

const FooterLink = styled(Link)({
  color: "#fff",
  paddingBottom: "8px",
  '&:hover': {
    textDecoration: "underline",
  }
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <FooterLink href="#">About Us</FooterLink><br/>
            <FooterLink href="#">Careers</FooterLink><br/>
            <FooterLink href="#">Press</FooterLink><br/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <FooterLink href="#">Help Center</FooterLink><br/>
            <FooterLink href="#">Contact Us</FooterLink><br/>
            <FooterLink href="#">Privacy Policy</FooterLink><br/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <FooterLink href="#">Movies</FooterLink><br/>
            <FooterLink href="#">Theatre</FooterLink><br/>
            <FooterLink href="#">Gift Cards</FooterLink><br/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <SocialMediaContainer>
              <IconButton aria-label="Facebook" color="inherit" href="https://www.facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" href="https://www.twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" href="https://www.instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit" href="https://www.linkedin.com">
                <LinkedInIcon />
              </IconButton>
            </SocialMediaContainer>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
