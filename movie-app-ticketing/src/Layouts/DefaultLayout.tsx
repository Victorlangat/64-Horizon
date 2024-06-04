import React from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { pathname } = useRouter();
  const isIndex = pathname === "/";

  // Define paths that should not include the BottomNavbar
  const noBottomNavPaths = ["/about-us", "/privacy", "/policy"];
  const showBottomNav = !noBottomNavPaths.includes(pathname);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
