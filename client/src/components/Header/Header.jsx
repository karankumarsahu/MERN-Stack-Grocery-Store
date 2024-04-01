import CategoryIcon from "@mui/icons-material/Category";
import DeleteIcon from "@mui/icons-material/Delete";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Box,
  Button,
  Drawer,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import FruitsImg from "../../assets/Fruits Category.png";
import VegetablesImg from "../../assets/Vegetables Category.png";
import DrinksImg from "../../assets/Drinks Category.png";
import BakeryImg from "../../assets/Bakery Category.png";
import PersonalCareImg from "../../assets/Personal Care Category.png";
import GrainsImg from "../../assets/Grains Category.png";
import SnaksImg from "../../assets/Snaks Category.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const MenuOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isCategoryOpen, setIsCategoryOpen] = useState(null);
  const CategoryOpen = Boolean(isCategoryOpen);
  const handleCategoryClose = () => {
    setIsCategoryOpen(null);
  };

  const handleCategoryClick = (event) => {
    setIsCategoryOpen(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "90px" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            margin: "0 auto",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* Left Side */}
            <Stack direction="row" alignItems={"center"} gap={4}>
              <img
                style={{ width: "10rem", height: "auto" }}
                src={logo}
                alt=""
              />
              {/* Category Button */}
              <Box
                onClick={handleCategoryClick}
                sx={{
                  width: "10rem",
                  height: "2.8rem",
                  backgroundColor: "rgb(226 232 240)",
                  display: ["none", "none", "none", "flex"],
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "2px solid rgb(226 232 440)",
                    transform: "scale(1.1)",
                  },
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                <CategoryIcon />
                <Typography fontFamily={"Poppins, sans-serif"}>
                  Category
                </Typography>
              </Box>
              {/* Search Box */}
              <Box
                sx={{
                  width: "30rem",
                  height: "2.8rem",
                  borderRadius: "50px",
                  border: "2px solid rgb(226 232 240)",
                  display: ["none", "none", "flex", "flex"],
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "Poppins, sans-serif",
                  overflow: "hidden",
                }}
              >
                <SearchIcon
                  sx={{ width: "2rem", height: "2rem", margin: "0 10px" }}
                />

                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1rem",
                    padding: "0 10px",
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease-in-out",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Right Side */}
            <Stack direction="row" alignItems={"center"} gap={4}>
              {/* Cart Icon */}
              <Box
                onClick={toggleDrawer(true)}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease-in-out",
                  border: "2px solid #308C67",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "2px solid red",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <ShoppingBasketIcon />
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    transform: "translate(50%, -50%)",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: "rgb(226 232 240)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  0
                </Box>
              </Box>

              {/* Login And Profile Button */}
              {isLoggedIn ? (
                <Person2Icon
                  onClick={handleClick}
                  sx={{
                    width: "2.3rem",
                    height: "2.3rem",
                    backgroundColor: "#308C67",
                    borderRadius: "50%",
                    fill: "white",
                    padding: "5px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:active": {
                      backgroundColor: "transparent",
                      border: "2px solid #308C67",
                      fill: "#308C67",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#308C67",
                    fontFamily: "Poppins, sans-serif",
                    "&:hover": {
                      backgroundColor: "transparent",
                      border: "2px solid #308C67",
                      color: "#308C67",
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Stack>
          </Stack>
        </Paper>
        <CartDrawer toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />
        <ProfileMenu
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={MenuOpen}
        />
        <CategoryMenu
          anchorEl={isCategoryOpen}
          handleClose={handleCategoryClose}
          open={CategoryOpen}
        />
      </Box>
    </>
  );
};

const CartDrawer = ({ toggleDrawer, open, setOpen }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 380, padding: "20px" }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <Stack>
          <Box
            width={"100%"}
            height={"2.8rem"}
            sx={{
              backgroundColor: "#308C67",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              My Cart
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "77vh",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <CartItem
              itemImage={
                "https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678502/carrot_png_7crm54jnhoaaa46f_24b758a1ec.png"
              }
              itemName={"Red Carrot Vegetables"}
              itemPrice={2000}
              itemQuantity={1}
            />
          </Box>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ mt: "0.8rem" }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                Subtotal:
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                Rs 2000
              </Typography>
            </Stack>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: "0.2rem",
                backgroundColor: "#308C67",
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "2px solid #308C67",
                  color: "#308C67",
                },
              }}
            >
              Checkout
            </Button>
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
};

const CartItem = ({ itemImage, itemName, itemPrice, itemQuantity }) => {
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
        <img
          style={{
            width: "5rem",
            height: "auto",
            padding: "5px",
            border: "1px solid #ccc",
          }}
          src={itemImage}
          alt=""
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              sx={{
                width: "90%",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {itemName}
            </Typography>
            <Typography fontFamily={"Poppins, sans-serif"} fontSize={"0.8rem"}>
              Quantity: {itemQuantity}
            </Typography>
            <Typography fontFamily={"Poppins, sans-serif"} fontWeight={"600"}>
              Rs {itemPrice}
            </Typography>
          </Box>
          <DeleteIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

const CategoryMenu = ({ anchorEl, handleClose, open }) => {
  const categoryList = [
    { name: "Fruits", image: FruitsImg },
    { name: "Vegetables", image: VegetablesImg },
    { name: "Drinks", image: DrinksImg },
    { name: "Bakery", image: BakeryImg },
    { name: "Personal Care", image: PersonalCareImg },
    { name: "Grains", image: GrainsImg },
    { name: "Snaks", image: SnaksImg },
  ];

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
        style: {
          fontFamily: "Poppins, sans-serif",
        },
        padding: "0",
        margin: "0",
        borderRadius: "0",
        border: "0",
        boxShadow: "none",
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "0.8rem",
          fontWeight: "600",
          px: "1rem",
        }}
      >
        Browse Category
      </Typography>
      {categoryList.map((category) => (
        <MenuItem
          key={category.name}
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
          onClick={handleClose}
        >
          <img
            style={{
              width: "2rem",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center",
            }}
            src={category.image}
            alt=" fruits"
          />
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
            {category.name}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const ProfileMenu = ({ anchorEl, handleClose, open }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
        style: {
          fontFamily: "Poppins, sans-serif",
        },
        padding: "0",
        margin: "0",
        borderRadius: "0",
        border: "0",
        boxShadow: "none",
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My Orders</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};

export default Header;
