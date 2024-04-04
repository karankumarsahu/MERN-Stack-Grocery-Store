import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyOrders = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Box
          sx={{
            width: "100%",
            height: "5rem",
            backgroundColor: "#308C67",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Poppins, sans-serif",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "700",
            letterSpacing: "0.1rem",
            textTransform: "uppercase",
          }}
        >
          My Orders
        </Box>
        <Box sx={{ width: "90%", height: "100%", margin: "auto", mt: "2rem" }}>
          <Box sx={{ width: ["100%", "100%", "100%", "60%"] }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ bgcolor: "rgb(226 232 240)" }}
              >
                <Stack
                  direction={"row"}
                  gap={"1rem"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"700"}
                  >
                    Order Date :{" "}
                    <span style={{ fontWeight: "400" }}>2022-01-01</span>
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"700"}
                  >
                    Total Amount :{" "}
                    <span style={{ fontWeight: "400" }}> Rs. 500</span>
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"700"}
                  >
                    Status : <span style={{ fontWeight: "400" }}>Pending</span>
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <OrderItems />
                <OrderItems />
                <OrderItems />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const OrderItems = () => {
  return (
    <Stack
      direction={["column", "row"]}
      gap={"1rem"}
      alignItems={["flex-start", "center"]}
      justifyContent={"space-between"}
      width={"100%"}
      overflow={"hidden"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"1rem"}>
        <Box
          sx={{
            width: "8rem",
            height: "8rem",
            bgcolor: "rgb(226 232 240)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {/* Item Image */}
          <img
            style={{ width: "6rem", height: "6rem" }}
            src="https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678502/carrot_png_7crm54jnhoaaa46f_24b758a1ec.png"
            alt=""
          />
        </Box>
        <Box sx={{ display: ["block", "none"], width: "50%" }}>
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontWeight={"500"}
            sx={{
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Red Carrot Vegetables
          </Typography>
          {/* Item Price */}
          <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>
            Item Price : <span style={{ fontWeight: "400" }}>Rs 100</span>
          </Typography>
        </Box>
      </Stack>
      {/* Item Name And Price */}
      <Stack
        direction={"row"}
        gap={["1rem", "0rem"]}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Box sx={{ width: ["100%", "30%"], display: ["none", "block"] }}>
          {/* Item Name */}
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontWeight={"500"}
            sx={{
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Red Carrot Vegetables
          </Typography>
          {/* Item Price */}
          <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>
            Item Price : <span style={{ fontWeight: "400" }}>Rs 100</span>
          </Typography>
        </Box>
        {/* Quantity */}
        <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"500"}>
          Quantity : 1
        </Typography>
        {/* Item Total Price */}
        <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>
          {" "}
          Total Price : <span style={{ fontWeight: "400" }}>Rs. 100</span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MyOrders;
