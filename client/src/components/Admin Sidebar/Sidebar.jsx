import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../../assets/logo.png";
import InventoryIcon from "@mui/icons-material/Inventory";
import Person2Icon from "@mui/icons-material/Person2";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isActive = (path) => window.location.pathname === path;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          overflow: "hidden",
        }}
      >
        <Paper
          elevation={8}
          sx={{ width: "100%", height: "100%", padding: "1rem" }}
        >
          <img style={{ width: "10rem", height: "auto" }} src={logo} alt="" />
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontWeight={"500"}
            fontSize={"1rem"}
            sx={{ mt: "2rem" }}
            color={"rgb(107 114 128)"}
          >
            Dashboard
          </Typography>
          <List>
            <ListItem
              component={Link}
              to="/admin/dashboard"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                backgroundColor: isActive("/admin/dashboard")
                  ? "#308C67"
                  : "transparent",
                color: isActive("/admin/dashboard") ? "white" : "inherit",
                borderRadius: "0.5rem",
                padding: "0.8rem",
                cursor: "pointer",
              }}
            >
              <DashboardIcon />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"500"}
                fontSize={"1rem"}
                sx={{ textDecoration: "none" }}
              >
                Dashboard
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              component={Link}
              to="/admin/products"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                borderRadius: "0.5rem",
                padding: "0.8rem",
                cursor: "pointer",
                backgroundColor: isActive("/admin/products")
                  ? "#308C67"
                  : "transparent",
                color: isActive("/admin/products") ? "white" : "inherit",
              }}
            >
              <InventoryIcon />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"500"}
                fontSize={"1rem"}
                sx={{ textDecoration: "none" }}
              >
                Products
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              component={Link}
              to="/admin/customers"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                borderRadius: "0.5rem",
                padding: "0.8rem",
                cursor: "pointer",
                backgroundColor: isActive("/admin/customers")
                  ? "#308C67"
                  : "transparent",
                color: isActive("/admin/customers") ? "white" : "inherit",
              }}
            >
              <Person2Icon />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"500"}
                fontSize={"1rem"}
                sx={{ textDecoration: "none" }}
              >
                Customers
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              component={Link}
              to="/admin/transactions"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                borderRadius: "0.5rem",
                padding: "0.8rem",
                cursor: "pointer",
                backgroundColor: isActive("/admin/transactions")
                  ? "#308C67"
                  : "transparent",
                color: isActive("/admin/transactions") ? "white" : "inherit",
              }}
            >
              <AccountBalanceIcon />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"500"}
                fontSize={"1rem"}
                sx={{ textDecoration: "none" }}
              >
                Transactions
              </Typography>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </>
  );
};

export default Sidebar;
