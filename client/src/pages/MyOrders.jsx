import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetOrderByUserQuery } from "../redux/api/orderApi";


const MyOrders = () => {

  const {data, isLoading} = useGetOrderByUserQuery();

  console.log(data);
  


  
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
        {data?.length === 0 ? (
          <Typography sx={{  fontFamily: "Poppins, sans-serif", fontWeight: "600", fontSize: "1.5rem"}}> No Orders </Typography>
        ) : (
          isLoading ? (
            <CircularProgress
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          ) : (
            <Box sx={{ width: "90%", height: "100%", margin: "auto", mt: "2rem" }}>
              <Box sx={{ width: ["100%", "100%", "100%", "60%"] }}>
                {data?.map((order, index) => (
                  <Accordion key={index}>
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
                          <span style={{ fontWeight: "400" }}>{order?.createdAt.slice(0, 10)}</span>
                        </Typography>
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          fontWeight={"700"}
                        >
                          Total Amount :{" "}
                          <span style={{ fontWeight: "400" }}> Rs. {order?.total}</span>
                        </Typography>
                        <Typography
                          fontFamily={"Poppins, sans-serif"}
                          fontWeight={"700"}
                        >
                          Status : <span style={{ fontWeight: "400" }}>{order?.status}</span>
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    >
                      {order?.orderItems?.map((item) => (
                        <OrderItems key={item?._id} image={item?.image} name={item?.name} basePrice={item?.basePrice} total={item?.total} qty={item?.qty} />
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          )
        )}
      </Box>
    </>
  );
  
};

const OrderItems = ({ image, name, basePrice, total, qty}) => {
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
            src={image}
            alt=""
          />
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
            {name}
          </Typography>
          {/* Item Price */}
          <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>
            Item Price : <span style={{ fontWeight: "400" }}>Rs {basePrice}</span>
          </Typography>
        </Box>
        {/* Quantity */}
        <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"500"}>
          Quantity : {qty}
        </Typography>
        {/* Item Total Price */}
        <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>
          {" "}
          Total Price : <span style={{ fontWeight: "400" }}>Rs. {basePrice} </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MyOrders;
