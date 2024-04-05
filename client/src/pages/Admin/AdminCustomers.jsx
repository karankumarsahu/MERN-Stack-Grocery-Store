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

const AdminCustomers = () => {
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
              All Customers
            </Typography>
            <Divider sx={{ my: "1rem", bgcolor: "#ccc" }} />
            <AllCustomersTable />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

const AllCustomersTable = () => {
  function createData(
    avatar,
    name,
    customerId,
    email,
    gender,
    role,
    createdAt,
    remove
  ) {
    return {
      avatar,
      name,
      customerId,
      email,
      gender,
      role,
      createdAt,
      remove,
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
      "Karan Kumar Sahu",
      1234564789,
      "sahu@123",
      "Male",
      "Admin",
      "12-12-2022",
      <Button variant="contained" sx={{ bgcolor: "#F9285A" }}>
        {" "}
        Remove
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
              Avatar
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Name
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              CustomerId
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Email
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Gender
            </TableCell>

            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Role
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Created At
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ width: "10%" }} align="left">
                {row.avatar}
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                {row.customerId}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.createdAt}</TableCell>
              <TableCell align="left">{row.remove}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminCustomers;
