import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Container } from "@mui/material";
import HeroImage1 from "../../assets/Hero Image 1.png";
import HeroImage2 from "../../assets/Hero Image 2.jpg";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxHeight: "65vh",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
            marginTop: "2rem",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            stopOnHover={false}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
            transitionTime={1000}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "center",
              }}
              src={HeroImage1}
              alt="heroimage1"
            />
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "center",
              }}
              src={HeroImage2}
              alt="heroimage2"
            />
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
