import NorthIcon from "@mui/icons-material/North";
import Person2Icon from "@mui/icons-material/Person2";
import { Box, Button, Divider, Menu, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { defaults } from "chart.js/auto";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { ManageOrders } from "../../components/Admin Manage Orders/ManageOrders";
import Sidebar from "../../components/Admin Sidebar/Sidebar";

const AdminDashboard = () => {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = "black";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 5fr",
            gap: "2rem",
            height: "100%",
          }}
        >
          <Sidebar />

          <Paper
            elevation={3}
            sx={{
              width: "100%",
              height: "100vh",
              margin: "auto",
              padding: "1rem",
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "1rem",
                mb: "1rem",
              }}
            >
              <Person2Icon onClick={handleClick} sx={{ width: "2rem", height: "2rem", cursor: "pointer" }} />
              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
            </Box>
            <Divider />

            {/* Stats here */}
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                mt: "2rem",
              }}
            >
              {/* Order Received */}
              <Paper
                elevation={3}
                sx={{ width: "100%", height: "10rem", padding: "1rem" }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                >
                  Order Received
                </Typography>
                <Stack
                  direction={"row"}
                  gap={"1rem"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "0.2rem" }}
                >
                  <NorthIcon
                    sx={{ width: "2.5rem", height: "2.5rem", fill: "#00c292 " }}
                  />
                  <Box>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"1rem"}
                      color={"rgb(107 114 128 )"}
                    >
                      Today's Orders
                    </Typography>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"2rem"}
                      mt={"-0.5rem"}
                    >
                      1200
                    </Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    50%
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "50%",
                        height: "100%",
                        bgcolor: "#00c292",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Tax Deduction */}
              <Paper
                elevation={3}
                sx={{ width: "100%", height: "10rem", padding: "1rem" }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                >
                  Tax Deduction
                </Typography>
                <Stack
                  direction={"row"}
                  gap={"1rem"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "0.2rem" }}
                >
                  <NorthIcon
                    sx={{ width: "2.5rem", height: "2.5rem", fill: "#fb9678 " }}
                  />
                  <Box>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"1rem"}
                      color={"rgb(107 114 128 )"}
                    >
                      Monthly Deduction
                    </Typography>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"2rem"}
                      mt={"-0.5rem"}
                    >
                      Rs 1200
                    </Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    20%
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "20%",
                        height: "100%",
                        bgcolor: "#fb9678",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Revenue Stats */}
              <Paper
                elevation={3}
                sx={{ width: "100%", height: "10rem", padding: "1rem" }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                >
                  Revenue Stats
                </Typography>
                <Stack
                  direction={"row"}
                  gap={"1rem"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "0.2rem" }}
                >
                  <NorthIcon
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      fill: "#03a9f3 ",
                      transform: "rotate(180deg)",
                    }}
                  />
                  <Box>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"1rem"}
                      color={"rgb(107 114 128 )"}
                    >
                      Today's Income
                    </Typography>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"2rem"}
                      mt={"-0.5rem"}
                    >
                      Rs 1200
                    </Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    20%
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "20%",
                        height: "100%",
                        bgcolor: "#03a9f3",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Yearly Sales */}
              <Paper
                elevation={3}
                sx={{ width: "100%", height: "10rem", padding: "1rem" }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                >
                  Yearly Sales
                </Typography>
                <Stack
                  direction={"row"}
                  gap={"1rem"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "0.2rem" }}
                >
                  <NorthIcon
                    sx={{ width: "2.5rem", height: "2.5rem", fill: "black" }}
                  />
                  <Box>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"1rem"}
                      color={"rgb(107 114 128 )"}
                    >
                      Yearly Income
                    </Typography>
                    <Typography
                      fontFamily={"Poppins, sans-serif"}
                      fontSize={"2rem"}
                      mt={"-0.5rem"}
                    >
                      Rs 12000
                    </Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography fontFamily={"Poppins, sans-serif"}>
                    60%
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.5rem",
                      border: "1px solid #ccc",
                      borderRadius: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        height: "100%",
                        bgcolor: "black",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Stack>
              </Paper>
            </Box>

            {/* Product Sales And Order Stats */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1.8fr 1fr",
                gap: "1rem",
                mt: "2rem",
              }}
            >
              {/* Product Sales */}
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "25rem",
                  padding: "1rem",
                  pb: "2rem",
                }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  fontWeight={"500"}
                >
                  Product Sales
                </Typography>
                <Line
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                    ],
                    datasets: [
                      {
                        label: "Sales",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: "rgb(13, 219, 228)",
                        borderColor: "rgba(0,0,0,1)",
                        borderWidth: 0,
                        fill: true,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    indexAxis: "x",
                    plugins: {
                      legend: {
                        display: false,
                      },
                      title: {
                        display: false,
                      },
                    },

                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          display: false,
                        },
                      },
                      x: {
                        grid: {
                          display: false,
                        },
                      },
                    },
                    tension: 0.5,
                  }}
                />
              </Paper>

              {/* Order Stats */}
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "25rem",
                  padding: "1rem",
                  pb: "2rem",
                }}
              >
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1.2rem"}
                  fontWeight={"500"}
                >
                  Order Stats
                </Typography>

                <Doughnut
                  data={{
                    labels: ["Orders", "Pending", "Shipping", "Delivered"],
                    datasets: [
                      {
                        data: [100, 12, 19, 3],
                        backgroundColor: [
                          "#FB9678",
                          "#f44336",
                          "#03a9f3",
                          "#308C67",
                        ],
                        borderWidth: 1,
                        offset: 10,
                      },
                    ],
                  }}
                />
              </Paper>
            </Box>

            {/* Latest Transactions */}
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "auto",
                padding: "1rem",
                pb: "2rem",
                mt: "2rem",
              }}
            >
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Latest Transactions
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1.2fr 1.5fr 1.5fr 0.54fr 0.8fr 0.8fr 0.5fr",
                  my: "1rem",
                }}
              >
                {/* Image */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Image
                </Typography>
                {/* Order Id */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Order Id
                </Typography>
                {/* Customer Name */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Customer
                </Typography>
                {/* Product */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Product
                </Typography>
                {/* Quantity */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Quantity
                </Typography>
                {/* Date */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Date
                </Typography>
                {/* Status */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Status
                </Typography>
                {/* Action */}
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"500"}
                >
                  Actions
                </Typography>
              </Box>
              <Divider sx={{ my: "1rem", backgroundColor: "#ccc" }} />
              <LatestTransactions />
              <LatestTransactions />
              <LatestTransactions />
            </Paper>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

const LatestTransactions = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1.5fr 1.5fr 0.4fr 0.8fr 0.8fr 0.5fr",
          my: "1rem",
          height: "5rem",
        }}
      >
        {/* Image */}
        <img
          style={{
            width: "5rem",
            height: "5rem",
            objectFit: "contain",
            borderRadius: "50%",
          }}
          src="https://source.unsplash.com/random"
          alt=""
        />
        {/* Order Id */}
        <Typography fontFamily={"Poppins, sans-serif"}>123456789</Typography>
        {/* Customer Name */}
        <Typography
          fontFamily={"Poppins, sans-serif"}
          sx={{
            width: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Karan Kumar Sahu
        </Typography>
        {/* Product */}
        <Typography
          fontFamily={"Poppins, sans-serif"}
          sx={{
            width: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Red Carrot Vegetables
        </Typography>
        {/* Quantity */}
        <Typography fontFamily={"Poppins, sans-serif"}>6</Typography>
        {/* Date */}
        <Typography fontFamily={"Poppins, sans-serif"}>12/12/2022</Typography>
        {/* Status */}
        <Typography fontFamily={"Poppins, sans-serif"}>Pending</Typography>
        {/* Action */}
        <Box>
          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            onClick={handleOpen}
            sx={{ backgroundColor: "#308C67", height: "2.5rem", width: "5rem" }}
          >
            Action
          </Button>
        </Box>
        <ManageOrders open={open} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default AdminDashboard;
