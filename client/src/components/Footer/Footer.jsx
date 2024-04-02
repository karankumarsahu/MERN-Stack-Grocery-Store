import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Career", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Help", link: "/" },
  ];

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", my: "2rem" }}>
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
            backgroundColor: "rgb(243 244 246)",
            padding: "1rem",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "12rem", height: "auto" }}
            src={logo}
            alt="logo"
          />
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"0.8rem"}
            width={["95%", "60%", "60%", "35%"]}
            textAlign={"center"}
            color={"rgb(107 114 128)"}
            mt={"1rem"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </Typography>
          <Stack
            direction={"row"}
            gap={"2rem"}
            mt={"2rem"}
            alignItems={"center"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {links.map((link) => (
              <Typography
                component={Link}
                to={link.link}
                key={link.name}
                color={"rgb(107 114 128)"}
                fontFamily={"Poppins, sans-serif"}
                sx={{
                  textDecoration: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Stack>
          <Stack
            direction={"row"}
            gap={"2rem"}
            mt={"2rem"}
            alignItems={"center"}
          >
            <FacebookOutlinedIcon
              sx={{
                fill: "rgb(107 114 128)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
            <InstagramIcon
              sx={{
                fill: "rgb(107 114 128)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
            <TwitterIcon
              sx={{
                fill: "rgb(107 114 128)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
            <GitHubIcon
              sx={{
                fill: "rgb(107 114 128)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
            <TelegramIcon
              sx={{
                fill: "rgb(107 114 128)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
