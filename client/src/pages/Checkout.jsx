import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import razarpay from "../assets/Razarpay.svg";
import axios from "axios";
import logo from "../assets/logo.png";

const Checkout = () => {
  const checkoutHandler = async () => {
    const {
      data: { key, order },
    } = await axios.post("http://localhost:8000/api/payment/razorpay", {
      amount: "500",
    });

    console.log(order);

    const options = {
      key: key,
      amount: "50000",
      currency: "INR",
      name: "Grocery Store",
      description: "This is a test mode payment",
      image: logo,
      order_id: order.id,
      callback_url: "http://localhost:8000/api/payment/paymentverification",
      prefill: {
        name: "Karan Sahu",
        email: "example@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
      razor.open();
  }

  

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", mb: "2rem" }}>
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
          Checkout
        </Box>
        <Box sx={{ width: "90%", height: "100%", margin: "auto", mt: "2rem" }}>
          <Stack
            direction={["column", "column", "row"]}
            gap={"2rem"}
            alignItems={"center"}
          >
            {/* Billing Details */}
            <Box sx={{ width: ["100%", "100%", "65%"] }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"700"}
                sx={{ fontSize: "2rem" }}
                color={"#1D825A"}
              >
                Billing Details
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                  mt: "1rem",
                }}
              >
                {/* Name and Email */}
                <Stack direction={["column", "row"]} gap={"1rem"}>
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="Name"
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="Email"
                  />
                </Stack>

                {/* State and City */}
                <Stack direction={["column", "row"]} gap={"1rem"}>
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="State"
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="City"
                  />
                </Stack>

                {/* District and Pincode */}
                <Stack direction={["column", "row"]} gap={"1rem"}>
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="District"
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="Pincode"
                  />
                </Stack>
                {/* Address */}
                <TextField
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                  fullWidth
                  label="Address"
                />
              </Box>
            </Box>

            {/* Pricing Details */}
            <Box
              sx={{
                width: ["100%", "100%", "35%"],
                height: "auto",
                border: "1px solid #ccc",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  width: "100%",
                  height: "3rem",
                  bgcolor: "rgb(226 232 240 )",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                  fontWeight: "700",
                  letterSpacing: "0.1rem",
                  textTransform: "uppercase",
                  color: "#1D825A",
                }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"700"}
                >
                  Total Cart (2)
                </Typography>
              </Box>

              <Box sx={{ width: "100%", height: "auto", p: "1rem" }}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"700"}
                  >
                    Subtotal:
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"700"}
                  >
                    Rs 100
                  </Typography>
                </Stack>

                <Divider sx={{ mt: "1rem" }} />

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={"1rem"}
                >
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={500}
                  >
                    Shipping Charges:
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={500}
                  >
                    Rs 50
                  </Typography>
                </Stack>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={"1rem"}
                >
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={500}
                  >
                    Tax (9%):
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={500}
                  >
                    Rs 9.00
                  </Typography>
                </Stack>
                <Divider sx={{ mt: "1rem" }} />

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={"1rem"}
                >
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={700}
                  >
                    Total:
                  </Typography>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={700}
                  >
                    Rs 159
                  </Typography>
                </Stack>
                <Button
                  onClick={checkoutHandler}
                  fullWidth
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "#EEAF2E",
                    mt: "1rem",
                    padding: "0.5rem",
                    "&:hover": {
                      bgcolor: "transparent",
                      border: "1px solid #EEAF2E",
                      color: "#EEAF2E",
                    },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <img
                    style={{ width: "8rem" }}
                    src={razarpay}
                    alt="razarpay"
                  />{" "}
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
