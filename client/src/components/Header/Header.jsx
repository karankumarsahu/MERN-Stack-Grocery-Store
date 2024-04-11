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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BakeryImg from "../../assets/Bakery Category.png";
import DrinksImg from "../../assets/Drinks Category.png";
import FruitsImg from "../../assets/Fruits Category.png";
import GrainsImg from "../../assets/Grains Category.png";
import PersonalCareImg from "../../assets/Personal Care Category.png";
import SnaksImg from "../../assets/Snaks Category.png";
import VegetablesImg from "../../assets/Vegetables Category.png";
import logo from "../../assets/logo.png";
import { useLogoutMutation } from "../../redux/api/userApi";
import { userNotExists } from "../../redux/reducer/userReducer";
import { calculatePrice, removeCartItem } from "../../redux/reducer/cartReducer";

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

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const { cartItems } = useSelector((state) => state.cartReducer);

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
                onClick={handleNavigate}
                style={{ width: "10rem", height: "auto", cursor: "pointer" }}
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
                  {cartItems.length}
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
  
    const { cartItems, subtotal } = useSelector((state) => state.cartReducer);
    console.log("cart", cartItems);

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(calculatePrice());

    }, [cartItems]);
  
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
           {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.productId}
                  itemImage={item.image}
                  itemName={item.name}
                  itemPrice={item.price}
                  itemQuantity={item.quantity}
                  itemId={item.id}
                />
              ) )) : <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", fontSize: "1.2rem", mt: "1rem" }}>No items in cart</Typography> }
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
                Rs {subtotal}
              </Typography>
            </Stack>
            <Button
            onClick={() => setOpen(true)}
            component={Link}
            to="/checkout"
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

const CartItem = ({ itemImage, itemName, itemPrice, itemQuantity , itemId}) => {
  
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeCartItem(itemId));
    toast.success("Item removed from cart");
  }
  
  
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
        width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box sx={{ width: "90%" }}>
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
          <DeleteIcon onClick={removeFromCart} sx={{ cursor: "pointer" }}  />
        </Stack>
      </Stack>
    </Box>
  );
};

const CategoryMenu = ({ anchorEl, handleClose, open }) => {
  const categoryList = [
    { name: "Fruits", image: FruitsImg, link: "/category/fruits" },
    { name: "Vegetables", image: VegetablesImg, link: "/category/vegetables" },
    { name: "Drinks", image: DrinksImg, link: "/category/drinks" },
    { name: "Bakery", image: BakeryImg, link: "/category/bakery" },
    {
      name: "Personal Care",
      image: PersonalCareImg,
      link: "/category/personal_care",
    },
    { name: "Grains", image: GrainsImg, link: "/category/grains" },
    { name: "Snaks", image: SnaksImg, link: "/category/snaks" },
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
          <Typography
            component={Link}
            to={category.link}
            sx={{
              fontFamily: "Poppins, sans-serif",
              textDecoration: "none",
              color: "black",
            }}
          >
            {category.name}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const ProfileMenu = ({ anchorEl, handleClose, open }) => {
  
  const [logout, { isLoading }] = useLogoutMutation();
  const dipatch = useDispatch();
  
   const handleLogout = async () => {
    try {
      const res =  await logout(); 
      dipatch(userNotExists());
      if(res.data) {
        toast.success("Logged out successfully!");
      }
      handleClose(); 
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout error if necessary
      toast.error("Logout failed. Please try again.");
    }
  };
  
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClick={handleClose}
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
      <MenuItem component={Link} to="/myorders"  onClick={handleClose}>My Orders</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default Header;
