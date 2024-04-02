import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import FruitsImg from "../../assets/Fruits Category.png";
import VegetablesImg from "../../assets/Vegetables Category.png";
import DrinksImg from "../../assets/Drinks Category.png";
import BakeryImg from "../../assets/Bakery Category.png";
import PersonalCareImg from "../../assets/Personal Care Category.png";
import GrainsImg from "../../assets/Grains Category.png";
import SnaksImg from "../../assets/Snaks Category.png";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const categoryList = [
    { name: "Fruits", image: FruitsImg, link: "/category/fruits" },
    { name: "Vegetables", image: VegetablesImg, link: "/category/vegetables" },
    { name: "Drinks", image: DrinksImg, link: "/category/drinks" },
    { name: "Bakery", image: BakeryImg, link: "/category/bakery" },
    {
      name: "Personal Care",
      image: PersonalCareImg,
      link: "/category/personal_care",
    },
    { name: "Grains", image: GrainsImg, link: "/category/grains" },
    { name: "Snaks", image: SnaksImg, link: "/category/snaks" },
  ];

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", mt: "2rem" }}>
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
          }}
        >
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"1.5rem"}
            fontWeight={"700"}
            color={"#1D825A"}
          >
            Shop By Category
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-evenly",
              mt: "1rem",
              flexWrap: "wrap",
            }}
          >
            {categoryList.map((item, index) => (
              <Paper
                component={Link}
                to={item.link}
                key={index}
                elevation={8}
                sx={{
                  width: "10rem",
                  height: "8rem",
                  backgroundColor: "rgb(240 253 244)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  gap: "0.5rem",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#1D825A",
                    color: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease-in-out",
                  },
                  borderRadius: "10px",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  style={{
                    width: "3rem",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  src={item.image}
                  alt={item.name}
                />
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1rem"}
                >
                  {item.name}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ShopByCategory;
