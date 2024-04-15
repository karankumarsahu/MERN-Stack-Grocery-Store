import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import razarpay from "../assets/Razarpay.svg";
import logo from "../assets/logo.png";
import { saveShippingInfo } from "../redux/reducer/cartReducer";
import {server} from "../redux/api/userApi"

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const dispatch = useDispatch();

  const { cartItems, subtotal, tax, shippingCharges, total } = useSelector(
    (state) => state.cartReducer
  );

  const { user } = useSelector((state) => state.userReducer);


  const checkoutHandler = async () => {
    if (
      !name ||
      !email ||
      !state ||
      !city ||
      !district ||
      !address ||
      !pincode
    ) {
      return toast.error("Please fill all the fields");
    } else {
      dispatch(
        saveShippingInfo({
          name,
          email,
          state,
          city,
          district,
          address,
          pincode,
        })
      );
    }

    const cartData = {
      user: user?._id,
      orderItems: cartItems,
      shippingInfo: {
        name,
        email,
        state,
        city,
        district,
        address,
        pincode,
      },
      subtotal,
      tax,
      shippingCharges,
      total,
    }

    localStorage.setItem("cart", JSON.stringify(cartData));



    const {
      data: { key, order },
    } = await axios.post(`${server}/api/payment/razorpay`, {
      amount: total,
    });

  

    const options = {
      key: key,
      amount: "50000",
      currency: "INR",
      name: "Grocery Store",
      description: "This is a test mode payment",
      image: logo,
      order_id: order.id,
      callback_url: `${server}/api/payment/paymentverification`,
      prefill: {
        name,
        email,
        contact: "0000000000",
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
  };

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Stack>

                {/* State and City */}
                <Stack direction={["column", "row"]} gap={"1rem"}>
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Stack>

                {/* District and Pincode */}
                <Stack direction={["column", "row"]} gap={"1rem"}>
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                  <TextField
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                    fullWidth
                    label="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </Stack>
                {/* Address */}
                <TextField
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                  fullWidth
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  Total Cart ({cartItems.length})
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
                    Rs {subtotal}
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
                    Rs {shippingCharges}
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
                    Rs {tax}
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
                    Rs {total}
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
