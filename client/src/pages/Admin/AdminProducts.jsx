import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "../../components/Admin Sidebar/Sidebar";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import styled from "@emotion/styled";

const AdminProducts = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.5rem"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                All Products
              </Typography>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  bgcolor: "#308C67",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                }}
              >
                <AddIcon onClick={handleOpen} sx={{ fill: "white" }} />
              </Box>
            </Stack>
            <Divider sx={{ my: "1rem", bgcolor: "#ccc" }} />
            <AllProductsTable />
            <AddProductsModal open={open} handleClose={handleClose} />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

const AllProductsTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(
    image,
    name,
    productId,
    quantity,
    price,
    inStock,
    edit,
    remove
  ) {
    return {
      image,
      name,
      productId,
      quantity,
      price,
      inStock,
      edit,
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
      "Red Carrot",
      1234564789,
      24,
      1200,
      20,
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ bgcolor: "#308C67" }}
      >
        {" "}
        Edit
      </Button>,
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
              Image
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
              ProductId
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
              Price
            </TableCell>

            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              In Stock
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
              align="left"
            >
              Edit
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
                {row.image}
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                {row.productId}
              </TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.inStock}</TableCell>
              <TableCell align="left">{row.edit}</TableCell>
              <TableCell align="left">{row.remove}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditProductsModal open={open} handleClose={handleClose} />
    </TableContainer>
  );
};

const EditProductsModal = ({ open, handleClose }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
          width: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          height: "90vh",
          overflowY: "scroll",
        }}
      >
        <Typography
          fontFamily={"Poppins, sans-serif"}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Edit Product
        </Typography>

        <Box
          sx={{
            width: "1005",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            mt: "2rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Edit Product Image */}

            <Box sx={{ position: "relative", width: "100%" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Product Image
              </Typography>

              <img
                style={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "cover",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  borderRadius: "30px",
                  position: "relative",
                }}
                src="https://source.unsplash.com/random"
                alt=""
              />
              <Box
                sx={{
                  width: "3rem",
                  hwight: "3rem",
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transform: "translate(50%, -50%)",
                  padding: "0.5rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#308C67",

                    svg: {
                      fill: "white",
                    },
                  },
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="text "
                  tabIndex={-1}
                >
                  <CreateIcon />
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                sx={{ width: "50%", textAlign: "center", mt: "0.5rem" }}
                color={"rgb(107 114 128 )"}
              >
                Set the product image. Only PNG file is allowed
              </Typography>
            </Box>

            {/* Stock Availability */}
            <Box sx={{ width: "100%", mt: "2rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Stock Availability
              </Typography>

              <Stack>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="In Stock"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Out Of Stock"
                  />
                </FormGroup>
              </Stack>
            </Box>

            {/* Edit Product Category */}
            <Box sx={{ width: "100%", mt: "2rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Product Category
              </Typography>
              <FormControl variant="outlined" sx={{ mt: 2, minWidth: 320 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={category}
                  label="Category"
                  // onChange={handleChange}
                >
                  <MenuItem defaultChecked value={10}>
                    Fruits
                  </MenuItem>
                  <MenuItem value={20}>Vegetables</MenuItem>
                  <MenuItem value={30}>Drinks</MenuItem>
                  <MenuItem value={30}>Bakey</MenuItem>
                  <MenuItem value={30}>Personal Care</MenuItem>
                  <MenuItem value={30}>Grains</MenuItem>
                  <MenuItem value={30}>Snaks</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.2rem"}
              fontWeight={"500"}
            >
              General
            </Typography>

            {/* Product Name */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1rem"}
                fontWeight={"500"}
              >
                Product Name
              </Typography>
              <TextField
                fullWidth
                label="Product Name"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "rgb(107 114 128 )",
                  mt: "0.5rem",
                }}
              >
                A product name is required and recommended to be unique{" "}
              </Typography>
            </Box>

            {/* Product Description */}
            <Box sx={{ width: "100%", mt: "1.5rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1rem"}
                fontWeight={"500"}
              >
                Product Description
              </Typography>
              <TextField
                fullWidth
                multiline
                label="Product Description"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set a description to the product for better visibility.
              </Typography>
            </Box>

            {/* Stock */}
            <Box sx={{ width: "100%", mt: "1.5rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                {" "}
                Product Stock
              </Typography>
              <TextField
                label="Stock"
                fullWidth
                type="number"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                {" "}
                Set the stock of the product{" "}
              </Typography>
            </Box>

            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.2rem"}
              fontWeight={"500"}
              sx={{ mt: "1.5rem" }}
            >
              Pricing
            </Typography>

            {/* Base Price */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                Base Price
              </Typography>
              <TextField
                label="Base Price"
                fullWidth
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set the base price of the product in Rs.
              </Typography>
            </Box>

            {/* Discount Price */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                Discounted Price
              </Typography>
              <TextField
                label="Base Price"
                fullWidth
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set the discount price of the product in Rs.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{ mt: "1rem", fontFamily: "Poppins, sans-serif" }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

const AddProductsModal = ({ open, handleClose }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
          width: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          height: "90vh",
          overflowY: "scroll",
        }}
      >
        <Typography
          fontFamily={"Poppins, sans-serif"}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Add Product
        </Typography>

        <Box
          sx={{
            width: "1005",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            mt: "2rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Add Product Image */}

            <Box sx={{ position: "relative", width: "100%" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Product Image
              </Typography>

              <img
                style={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "cover",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  borderRadius: "30px",
                  position: "relative",
                }}
                src="https://source.unsplash.com/random"
                alt=""
              />
              <Box
                sx={{
                  width: "3rem",
                  hwight: "3rem",
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transform: "translate(50%, -50%)",
                  padding: "0.5rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#308C67",

                    svg: {
                      fill: "white",
                    },
                  },
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="text "
                  tabIndex={-1}
                >
                  <CreateIcon />
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                sx={{ width: "50%", textAlign: "center", mt: "0.5rem" }}
                color={"rgb(107 114 128 )"}
              >
                Set the product image. Only PNG file is allowed
              </Typography>
            </Box>

            {/* Stock Availability */}
            <Box sx={{ width: "100%", mt: "2rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Stock Availability
              </Typography>

              <Stack>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="In Stock"
                  />
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Out Of Stock"
                  />
                </FormGroup>
              </Stack>
            </Box>

            {/* Add Product Category */}
            <Box sx={{ width: "100%", mt: "2rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1.2rem"}
                fontWeight={"500"}
              >
                Product Category
              </Typography>
              <FormControl variant="outlined" sx={{ mt: 2, minWidth: 320 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={category}
                  label="Category"
                  // onChange={handleChange}
                >
                  <MenuItem defaultChecked value={10}>
                    Fruits
                  </MenuItem>
                  <MenuItem value={20}>Vegetables</MenuItem>
                  <MenuItem value={30}>Drinks</MenuItem>
                  <MenuItem value={30}>Bakey</MenuItem>
                  <MenuItem value={30}>Personal Care</MenuItem>
                  <MenuItem value={30}>Grains</MenuItem>
                  <MenuItem value={30}>Snaks</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.2rem"}
              fontWeight={"500"}
            >
              General
            </Typography>

            {/* Product Name */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1rem"}
                fontWeight={"500"}
              >
                Product Name
              </Typography>
              <TextField
                fullWidth
                label="Product Name"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "rgb(107 114 128 )",
                  mt: "0.5rem",
                }}
              >
                A product name is required and recommended to be unique{" "}
              </Typography>
            </Box>

            {/* Product Description */}
            <Box sx={{ width: "100%", mt: "1.5rem" }}>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"1rem"}
                fontWeight={"500"}
              >
                Product Description
              </Typography>
              <TextField
                fullWidth
                multiline
                label="Product Description"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set a description to the product for better visibility.
              </Typography>
            </Box>

            {/* Stock */}
            <Box sx={{ width: "100%", mt: "1.5rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                {" "}
                Product Stock
              </Typography>
              <TextField
                label="Stock"
                fullWidth
                type="number"
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                {" "}
                Set the stock of the product{" "}
              </Typography>
            </Box>

            <Typography
              fontFamily={"Poppins, sans-serif"}
              fontSize={"1.2rem"}
              fontWeight={"500"}
              sx={{ mt: "1.5rem" }}
            >
              Pricing
            </Typography>

            {/* Base Price */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                Base Price
              </Typography>
              <TextField
                label="Base Price"
                fullWidth
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set the base price of the product in Rs.
              </Typography>
            </Box>

            {/* Discount Price */}
            <Box sx={{ width: "100%", mt: "1rem" }}>
              <Typography fontFamily={"Poppins, sans-serif"} fontSize={"1rem"}>
                Discounted Price
              </Typography>
              <TextField
                label="Base Price"
                fullWidth
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                sx={{ mt: "0.5rem", fontFamily: "Poppins, sans-serif" }}
              />
              <Typography
                fontFamily={"Poppins, sans-serif"}
                fontSize={"0.8rem"}
                color={"rgb(107 114 128 )"}
                mt={"0.5rem"}
              >
                Set the discount price of the product in Rs.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{ mt: "1rem", fontFamily: "Poppins, sans-serif" }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdminProducts;
