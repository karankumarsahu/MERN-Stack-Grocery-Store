import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import { useCreateOrderMutation } from "../redux/api/orderApi";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");

  const [data] = useCreateOrderMutation();

  const placeOrder = async () => {
    try {
      const {
        user,
        orderItems,
        shippingInfo,
        subtotal,
        tax,
        shippingCharges,
        total,
      } = JSON.parse(localStorage.getItem("cart"));

      const res = await data({
        user,
        orderItems,
        billingAddress: shippingInfo,
        subtotal,
        tax,
        shippingCharges,
        total,
      });

      console.log(res);

      toast.success(res.data?.message);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      placeOrder();
    }
  
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: ["90%", "60%", "50%"],
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontWeight={"700"}
            textTransform={"uppercase"}
            sx={{ fontSize: "2rem" }}
          >
            Order Successful
          </Typography>

          <Typography fontFamily={"Poppins, sans-serif"}>
            Reference No: {referenceNum}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
              gap: ["0.5rem", "1rem"],
              paddingX: "3rem",
            }}
          >
            <Button
              component={Link}
              to="/myorders"
              variant="contained"
              sx={{
                mt: "1rem",
                width: "100%",
                backgroundColor: "#1D825A",
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "#1D825A",
                  border: "1px solid #1D825A",
                },
              }}
            >
              My Orders
            </Button>

            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                mt: "1rem",
                width: "100%",
                color: "#1D825A",
                fontFamily: "Poppins, sans-serif",
                bgcolor: "transparent",
                border: "1px solid #1D825A",
                "&:hover": {
                  bgcolor: "#1D825A",
                  color: "white",
                },
              }}
            >
              Go to Home
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default PaymentSuccess;
