import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "../../components/Admin Sidebar/Sidebar";
import { ManageOrders } from "../../components/Admin Manage Orders/ManageOrders";

const AdminTransactions = () => {
  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Box
          sx={{ display: "grid", gridTemplateColumns: "1fr 5fr", gap: "2rem" }}
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
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.5rem"}
              fontWeight={"600"}
              textTransform={"uppercase"}
            >
              All Transactions
            </Typography>
            <Divider sx={{ my: "1rem", bgcolor: "#ccc" }} />
            <AllTransactionsTable />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

const AllTransactionsTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(
    image,
    orderId,
    customer,
    product,
    quantity,
    date,
    status,
    actions
  ) {
    return {
      image,
      orderId,
      customer,
      product,
      quantity,
      date,
      status,
      actions,
    };
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
        src="https://source.unsplash.com/random"
        alt=""
      />,
      1234564789,
      "Karan Kumar Sahu",
      "Red Carrot",
      "15",
      "12-12-2022",
      "Pending",
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ bgcolor: "#F9285A" }}
      >
        {" "}
        Action
      </Button>
    ),
  ];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              Image
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Order Id
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Customer
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Product
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Quantity
            </TableCell>

            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Date
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Status
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.image}</TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                {row.orderId}
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                {row.customer}
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                {row.product}
              </TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ManageOrders open={open} handleClose={handleClose} />
    </TableContainer>
  );
};
export default AdminTransactions;
