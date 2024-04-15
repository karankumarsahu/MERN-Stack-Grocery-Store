import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "../../redux/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducer/cartReducer";
import { toast } from "react-hot-toast"


const LatestProducts = () => {
  const { data } = useGetAllProductsQuery();

  const productData = data?.products;

  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
            mt: "2rem",
          }}
        >
          <Typography
            fontFamily={"Poppins, sans-serif"}
            fontSize={"1.5rem"}
            fontWeight={"700"}
            color={"#1D825A"}
          >
            Our Latest Products
          </Typography>

          <Box
            direction={"row"}
            sx={{
              width: "100%",
              alignItems: "center",
              mt: "1.5rem",
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
            {productData?.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                name={item.name}
                basePrice={item.basePrice}
                discountedPrice={item.discountedPrice}
                _id={item._id}
                {...item}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const ProductCard = ({
  image,
  name,
  basePrice,
  discountedPrice,
  _id,

}) => {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1); // State for quantity

  const dispatch = useDispatch();

  const handleButton = () => {
    setOpen(true);
  };


  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: _id,
        name: name,
        image: image,
        basePrice: basePrice,
        discountedPrice: discountedPrice,
        qty: quantity,
        product:_id
      })
    );

    
    toast.success("Item added to cart");
    setOpen(false);
  };

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
        <img style={{ width: "12rem", height: "auto" }} src={image} alt="" />
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
            {name}
          </Typography>
          <Stack direction={"row"} gap={"0.8rem"} mt={"0.5rem"}>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"700"}
            >
              ₹{discountedPrice}
            </Typography>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"400"}
              sx={{ textDecoration: "line-through" }}
            >
              {" "}
              ₹{basePrice}
            </Typography>
          </Stack>
          <Button
            onClick={handleButton}
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
        <AddToCardModal
          productId={_id}
          open={open}
          setOpen={setOpen}
          quantity={quantity} 
          setQuantity={setQuantity} 
          addToCartHandler={addToCartHandler}
        />
      </Paper>
    </>
  );
};

const AddToCardModal = ({ open, setOpen, productId, quantity, setQuantity, addToCartHandler }) => {
  const handleClose = () => setOpen(false);

  const [product, setProduct] = React.useState(null);

  const { data: productData } = useGetProductByIdQuery(productId, {
    skip: !open,
  });


  useEffect(() => {
    if (productData) {
      setProduct(productData.product);
    }
  }, [productData]);

  const incrementHandler = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }

    if (quantity === product.stock) {
      setQuantity(quantity);
    }
  };

  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (quantity === 1) {
      setQuantity(quantity);
    }
  };

  const itemTotalPrice = product?.discountedPrice * quantity;


  const handleClickAddToCart = () => {
    addToCartHandler(); // Call addToCartHandler function
  };

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
              src={product?.image}
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
              {product?.name}
            </Typography>
            {/* Product Description */}
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"0.8rem"}
              mt={"0.5rem"}
              textTransform={"capitalize"}
            >
              {product?.description}
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
              ₹ {product?.discountedPrice}
            </Typography>
            {/* Product Quantity */}
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1rem"}
              fontWeight={"600"}
              mt={"0.8rem"}
            >
              {" "}
              Qunatity ({product?.productQuantity})
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
                <Button
                  onClick={decrementHandler}
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                >
                  -
                </Button>
                <Typography
                  fontFamily={"Poppins, sans-serif"}
                  fontWeight={"600"}
                >
                  {quantity}
                </Typography>
                <Button
                  onClick={incrementHandler}
                  variant="text"
                  sx={{ fontSize: "1rem" }}
                >
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
                = ₹ {itemTotalPrice}
              </Typography>
            </Stack>
            <Button
            onClick={handleClickAddToCart}
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
              Category:{" "}
              <span style={{ fontWeight: "400", textTransform: "capitalize" }}>
                {product?.category}
              </span>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LatestProducts;
