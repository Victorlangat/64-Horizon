// StyledComponents/Landing.ts
import { styled, Box, Card, CardContent, CardMedia } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  minHeight:"100vh",
  paddingTop: "120px",
  backgroundColor: '#001232',
  color: '#fff',
  width: "100vw",
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    paddingTop: '60px',
  },
}));

export const MovieCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '20px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: "pointer",
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
  },
}));

export const MovieCardMedia = styled(CardMedia)({
  height: 340,
  width:300,
});

export const MovieCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
