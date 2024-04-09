import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginMutation, useRegisterMutation } from "../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { userExists } from "../redux/reducer/userReducer";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) return toast.error("All fields are required");
    try {
      const res = await login({ email, password });
      toast.success(res.data.message);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.log(error);
    }

   
  };

  const [register, { isLoading }] = useRegisterMutation();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !fullName || !email || !password)
      return toast.error("All fields are required");
    try {
      const res = await register({ username, fullName, email, password });
      toast.success(res.data.message);
      setUsername("");
      setFullName("");
      setEmail("");
      setPassword("");
      setIsLogIn(true);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper elevation={8} sx={{ width: "100%", padding: "2rem" }}>
            {isLogIn ? (
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "10rem", height: "auto", marginTop: "1rem" }}
                />
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "700",
                    mt: "1rem",
                  }}
                >
                  Login to Your Account
                </Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                  Get started by logging in below.
                </Typography>
                <form
                  onSubmit={handleLogin}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  {/* Email */}
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{ mt: "1rem" }}
                    label="Email"
                  />
                  {/* Password */}
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    type="password"
                    sx={{ mt: "1rem" }}
                    label="Password"
                  />
                  <Button
                    disabled={isLoginLoading}
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: "1rem",
                      backgroundColor: "#308C67",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "1px solid #308C67",
                        color: "#308C67",
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    Log In
                  </Button>
                </form>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {" "}
                  Don't have an account?{" "}
                  <Typography
                    onClick={() => setIsLogIn(false)}
                    component={Link}
                    sx={{
                      color: "#308C67",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Sign Up
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "10rem", height: "auto", marginTop: "1rem" }}
                />
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "700",
                    mt: "1rem",
                  }}
                >
                  Create an account
                </Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
                  Start your journey by creating an account.
                </Typography>
                <form
                  onSubmit={handleSignup}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  {/* Username */}
                  <TextField
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    label="Username"
                  />
                  {/* Full Name */}
                  <TextField
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                    label="Full Name"
                  />
                  {/* Email */}
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{ mt: "1rem" }}
                    label="Email"
                  />
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    fullWidth
                    sx={{ mt: "1rem" }}
                    label="Password"
                  />
                  <Button
                    disabled={isLoading}
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: "1rem",
                      backgroundColor: "#308C67",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "transparent",
                        border: "1px solid #308C67",
                        color: "#308C67",
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </form>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    mt: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {" "}
                  Already have an account?{" "}
                  <Typography
                    onClick={() => setIsLogIn(true)}
                    component={Link}
                    sx={{
                      color: "#308C67",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Log In
                  </Typography>
                </Typography>
              </Stack>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Login;
