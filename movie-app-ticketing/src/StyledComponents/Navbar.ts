// StyledComponents/Navbar.ts
import { styled, Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";

export const MainNavContainer = styled(AppBar)({
  backgroundColor: '#0A1F5F',
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  width:"100vw",
  zIndex:1000
});

export const DrawerContainer = styled(Box)({
  width: 250,
});

export const NavList = styled(List)({
  display: 'flex',
  justifyContent: 'center', // Align to the right
  flexGrow: 1,
  // padding: '0 20px',
});

export const NavItem = styled(ListItem)({
  display: 'inline',
  width: 'auto',
});

export const MobileNavList = styled(List)({
  display: 'block',
  backgroundColor: '#0A1F5F',
  width:"100vw",
  "*":{
    color:"#fff",
    textDecoration:"none"
  }
});

export const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1, // Take up remaining space
  maxWidth:"90vw"
});
