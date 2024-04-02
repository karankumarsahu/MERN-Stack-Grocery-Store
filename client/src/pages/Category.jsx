import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BakeryImg from "../assets/Bakery Category.png";
import DrinksImg from "../assets/Drinks Category.png";
import FruitsImg from "../assets/Fruits Category.png";
import GrainsImg from "../assets/Grains Category.png";
import PersonalCareImg from "../assets/Personal Care Category.png";
import SnaksImg from "../assets/Snaks Category.png";
import VegetablesImg from "../assets/Vegetables Category.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Category = () => {
  const { categoryName } = useParams();
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
          {categoryName}
        </Box>
        <CategoryCards />
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
            mt: "2rem",
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ],
            placeItems: "center",

            gap: "1rem",
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Box>
    </>
  );
};

const CategoryCards = () => {
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

  const location = useLocation();

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", mt: "2rem" }}>
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
          }}
        >
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"1.5rem"}
            fontWeight={"700"}
            color={"#1D825A"}
          >
            Shop By Category
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-evenly",
              mt: "1rem",
              flexWrap: "wrap",
            }}
          >
            {categoryList.map((item, index) => (
              <Paper
                component={Link}
                to={item.link}
                key={index}
                elevation={8}
                sx={{
                  width: "10rem",
                  height: "8rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  gap: "0.5rem",
                  textDecoration: "none",
                  backgroundColor:
                    location.pathname === item.link
                      ? "#1D825A"
                      : "rgb(240 253 244)",
                  color: location.pathname === item.link ? "white" : "black",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#1D825A",
                    color: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease-in-out",
                  },
                  borderRadius: "10px",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  style={{
                    width: "3rem",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  src={item.image}
                  alt={item.name}
                />
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontSize={"1rem"}
                >
                  {item.name}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

const ProductCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          width: "20rem",
          height: "25rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          borderRadius: "10px",

          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          style={{ width: "12rem", height: "auto" }}
          src="https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678502/carrot_png_7crm54jnhoaaa46f_24b758a1ec.png"
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "2rem",
          }}
        >
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"1rem"}
            fontWeight={"600"}
            sx={{
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            Red Carrot Vegetables
          </Typography>
          <Stack direction={"row"} gap={"0.8rem"} mt={"0.5rem"}>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"700"}
            >
              ₹100
            </Typography>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"400"}
              sx={{ textDecoration: "line-through" }}
            >
              {" "}
              ₹120
            </Typography>
          </Stack>
          <Button
            onClick={handleOpen}
            variant="outlined"
            sx={{
              mt: "1rem",
              color: "#1D825A",
              fontFamily: "Poppins, sans-serif",
              transition: "all 0.3s ease-in-out",
              " &:hover": {
                backgroundColor: "#1D825A",
                color: "#fff",
              },
            }}
          >
            Add To Cart
          </Button>
        </Box>
        <AddToCardModal open={open} setOpen={setOpen} />
      </Paper>
    </>
  );
};

const AddToCardModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
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
          width: ["90%", 700],
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "hidden",
          maxHeight: "90vh",
          overflowY: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          gap={"1.5rem"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{
              width: "20rem",
              height: "20rem",
              backgroundColor: "#e2e8f0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Product Image */}
            <img
              style={{ width: "15rem", height: "auto" }}
              src="https://res.cloudinary.com/dvytn4u6i/image/upload/v1710678506/purepng_com_orange_orangeorangefruitbitter_orangeorangesclip_art_17015273374288pjtg_08c2714871.png"
              alt=""
            />
          </Box>
          <Box>
            {/* Product Name */}
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.5rem"}
              fontWeight={"700"}
            >
              Fresh Orange 6 pcs
            </Typography>
            {/* Product Description */}
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"0.8rem"}
              mt={"0.5rem"}
            >
              Oranges are a favourite snack for many people. They can be eaten
              out-of-hand or used as a garnish. Besides orange juices, which are
              very popular worldwide,
            </Typography>
            {/* Product Price */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                mt: "1rem",
              }}
            >
              ₹ 100
            </Typography>
            {/* Product Quantity */}
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"600"}
              mt={"0.8rem"}
            >
              {" "}
              Qunatity (6 pcs)
            </Typography>
            {/* Item Quantity and Item Total Price */}
            <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
              {/* Item Quantity */}
              <Box
                sx={{
                  width: "10rem",
                  height: "2.5rem",
                  border: "1px solid #ccc",
                  mt: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "5px",
                  overflow: "hidden",
                  padding: "0.5rem",
                  gap: "0.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Button variant="text" sx={{ fontSize: "1rem" }}>
                  -
                </Button>
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"600"}
                >
                  1
                </Typography>
                <Button variant="text" sx={{ fontSize: "1rem" }}>
                  +
                </Button>
              </Box>
              {/* Item Total Price */}
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontWeight={"700"}
                fontSize={"1.5rem"}
              >
                {" "}
                = ₹ 100
              </Typography>
            </Stack>
            <Button
              variant="contained"
              fullWidth
              sx={{
                fontFamily: "Poppins, sans-serif",
                mt: "1rem",
                backgroundColor: "#308C67",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #308C67",
                  color: "#308C67",
                },

                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <ShoppingBasketIcon /> Add To Cart
            </Button>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontWeight={"600"}
              mt={"1rem"}
            >
              Category: <span style={{ fontWeight: "400" }}>Fruits</span>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Category;
