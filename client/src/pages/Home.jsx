import React from "react";
import HeroSection from "../components/Hero section/HeroSection";
import ShopByCategory from "../components/Shop By Category/ShopByCategory";
import LatestProducts from "../components/Latest Products/LatestProducts";
import { Box } from "@mui/material";
import Banner from "../assets/Home Banner.png";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <LatestProducts />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "90%", margin: "auto", mt: "2rem" }}>
          <img style={{ width: "100%" }} src={Banner} alt="" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
