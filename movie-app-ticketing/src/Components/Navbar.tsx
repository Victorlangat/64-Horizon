// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { MainNavContainer, DrawerContainer, NavList, NavItem, MobileNavList, LogoContainer } from '@/StyledComponents/Navbar';
import { Toolbar, IconButton, Drawer, ListItemText, Typography, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

interface LinkItem {
  label: string;
  href: string;
}

const links: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Movies', href: '/movies' },
  { label: 'Theatre', href: '/theatre' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <MainNavContainer position="static">
      <Toolbar>
        <LogoContainer>
          <Image src="/logo-no-background.png" width={160} alt="logo" height={45}/>
        </LogoContainer>
        <NavList sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {links.map((link) => (
            <NavItem key={link.href}>
              <Link href={link.href} passHref style={{textDecoration:"none", fontWeight:"800"}}>
                <ListItemText primary={link.label} sx={{color:"#fff", textDecoration:"none", fontWeight:"800"}}/>
              </Link>
            </NavItem>
          ))}
        </NavList>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <DrawerContainer
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <MobileNavList>
            {links.map((link) => (
              <ListItem button key={link.href}>
                <Link href={link.href} passHref>
                  <ListItemText primary={link.label} />
                </Link>
              </ListItem>
            ))}
          </MobileNavList>
        </DrawerContainer>
      </Drawer>
    </MainNavContainer>
  );
};

export default Navbar;
