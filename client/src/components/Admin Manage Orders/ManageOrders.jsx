import DateRangeIcon from "@mui/icons-material/DateRange";
import EmailIcon from "@mui/icons-material/Email";
import { default as LocalShipping, default as LocalShippingIcon } from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import Person2Icon from "@mui/icons-material/Person2";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ReceiptIcon from "@mui/icons-material/Receipt";
import {
    Box, Button,
    Divider, Modal, Stack, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import React from "react";
import razarpay from "../../assets/Razarpay.svg";


  export  const ManageOrders = ({ open, handleClose }) => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              overflowY: "scroll",
              height: "90vh",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontFamily={"Poppins, sans-serif"}
            >
              Manage Order
            </Typography>
            {/* Order Details , Customer Details , Documents */}
            <Box sx={{ mt: 2, width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "4rem",
                }}
              >
                {/* Order Details */}
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    sx={{ fontWeight: "500" }}
                    fontSize={"1.4rem"}
                  >
                    Order Details (#123456789)
                  </Typography>
                  <Stack mt={4}>
                    {/* Date Added */}
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <DateRangeIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Date Added
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        12/12/2022
                      </Typography>
                    </Stack>
  
                    {/* Payment Method */}
                    <Stack
                      direction={"row"}
                      mt={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <PaymentIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Payment Method
                        </Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={"0.5rem"}
                        width={"40%"}
                      >
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          fontWeight={"500"}
                          display={"flex"}
                          gap={"0.5rem"}
                        >
                          Online
                        </Typography>
                        <img
                          style={{ width: "5rem", height: "auto" }}
                          src={razarpay}
                          alt="razarpay"
                        />
                      </Stack>
                    </Stack>
  
                    {/* Shipping Method */}
                    <Stack
                      direction={"row"}
                      mt={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <LocalShippingIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Shipping Method
                        </Typography>
                      </Stack>
  
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        Flat Shipping Rate
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
  
                {/* Customer Details */}
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    sx={{ fontWeight: "500" }}
                    fontSize={"1.4rem"}
                  >
                    Customer Details
                  </Typography>
                  <Stack mt={4}>
                    {/* Customer Name*/}
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <Person2Icon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Customer
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        Karan Kumar Sahu
                      </Typography>
                    </Stack>
  
                    {/* Customer Email */}
                    <Stack
                      direction={"row"}
                      mt={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <EmailIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Email
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        example@gmail.com
                      </Typography>
                    </Stack>
  
                    {/* Customer Phone Number */}
                    <Stack
                      direction={"row"}
                      mt={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <PhoneAndroidIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Phone
                        </Typography>
                      </Stack>
  
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        91+ 9876543210
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
  
                {/* Documents */}
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    sx={{ fontWeight: "500" }}
                    fontSize={"1.4rem"}
                  >
                    Documents
                  </Typography>
                  <Stack mt={4}>
                    {/* Invoice Number*/}
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <ReceiptIcon sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Invoice
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        #INV-000414
                      </Typography>
                    </Stack>
  
                    {/* Shipping  */}
                    <Stack
                      direction={"row"}
                      mt={2}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Stack direction={"row"} gap={"0.5rem"}>
                        <LocalShipping sx={{ fill: "rgb(107 114 128 )" }} />
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          color={"rgb(107 114 128 )"}
                        >
                          Shipping
                        </Typography>
                      </Stack>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                        display={"flex"}
                        gap={"0.5rem"}
                      >
                        #SHP-0025410
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
  
            <Divider sx={{ my: "2rem" }} />
  
            {/* Address */}
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              {/* Billing Address */}
              <Box sx={{ width: "100%" }}>
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                  fontSize={"1.4rem"}
                >
                  Billing Address
                </Typography>
                <Box>
                  {/* Address */}
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    sx={{ mt: "1rem" }}
                  >
                    58 D Block Noida, India kjdfhjfhjsdfjdfjhsjhsd
                  </Typography>
  
                  {/* State */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Jharkhand
                  </Typography>
  
                  {/* City */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Jamshedpur
                  </Typography>
  
                  {/* District */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Pincode - 834001
                  </Typography>
                </Box>
              </Box>
  
              {/* Shipping Address */}
              <Box sx={{ width: "100%" }}>
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                  fontSize={"1.4rem"}
                >
                  Shipping Address
                </Typography>
                <Box>
                  {/* Address */}
                  <Typography
                    fontFamily={"Poppins, sans-serif"}
                    sx={{ mt: "1rem" }}
                  >
                    58 D Block Noida, India kjdfhjfhjsdfjdfjhsjhsd
                  </Typography>
  
                  {/* State */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Jharkhand
                  </Typography>
  
                  {/* City */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Jamshedpur
                  </Typography>
  
                  {/* District */}
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    Pincode - 834001
                  </Typography>
                </Box>
              </Box>
            </Box>
  
            <Divider sx={{ my: "2rem" }} />
  
            {/* Orders Summary */}
            <Box sx={{ width: "100%" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"500"}
                fontSize={"1.4rem"}
              >
                Orders Summary
              </Typography>
  
              <Box
                sx={{
                  width: "100%",
                  gap: "2rem",
                }}
              >
                <Box>
                  <OrderItems />
                </Box>
                {/* Price Details */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      width: "22rem",
                      paddingRight: "3rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {/* Subtotal */}
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        color={"rgb(107 114 128 )"}
                      >
                        Subtotal
                      </Typography>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        Rs 1200
                      </Typography>
                    </Stack>
                    {/* Shipping Charges */}
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        color={"rgb(107 114 128 )"}
                      >
                        Shipping Charge
                      </Typography>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        Rs 50
                      </Typography>
                    </Stack>
                    {/* Tax */}
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        color={"rgb(107 114 128 )"}
                      >
                        Tax
                      </Typography>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"500"}
                      >
                        Rs 20
                      </Typography>
                    </Stack>
                    {/* Grand Total */}
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"600"}
                        fontSize={"1.2rem"}
                      >
                        Grand Total
                      </Typography>
                      <Typography
                        fontFamily={"Poppins, sans-serif"}
                        fontWeight={"600"}
                        fontSize={"1.2rem"}
                      >
                        Rs 1200
                      </Typography>
                    </Stack>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "rgb(25 128 87 )" }}
                    >
                      Process Order
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  };
  
  const OrderItems = () => {
    function createData(Image, Product, ProductId, Quantity, Price, TotalPrice) {
      return { Image, Product, ProductId, Quantity, Price, TotalPrice };
    }
  
    const rows = [
      createData(
        <img
          style={{
            width: "5rem",
            height: "5rem",
            objectFit: "contain",
            borderRadius: "50%",
          }}
          src="https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678502/carrot_png_7crm54jnhoaaa46f_24b758a1ec.png"
          alt=""
        />,
        "Red Carrot",
        125223211212,
        6.0,
        24,
        1200
      ),
    ];
  
    return (
      <>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "0%" }}>Image</TableCell>
                <TableCell sx={{ width: "50%" }} align="left">
                  Product
                </TableCell>
                <TableCell sx={{ width: "20%" }} align="left">
                  ProductId
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="left">
                  Quantity
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ width: "50%" }} align="left">
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.product}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ width: "0%" }} align="left">
                    {row.Image}
                  </TableCell>
                  <TableCell sx={{ width: "50%" }} align="left">
                    {row.Product}
                  </TableCell>
                  <TableCell sx={{ width: "20%" }} align="left">
                    {row.ProductId}
                  </TableCell>
                  <TableCell sx={{ width: "10%" }} align="left">
                    {row.Quantity}
                  </TableCell>
                  <TableCell sx={{ width: "10%" }} align="left">
                    Rs. {row.Price}
                  </TableCell>
                  <TableCell sx={{ width: "50%" }} align="left">
                    Rs. {row.TotalPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
  