import { Navigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "./redux/api/userApi";
import { userExists, userNotExists } from "./redux/reducer/userReducer";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Category = lazy(() => import("./pages/Category"));
const MyOrders = lazy(() => import("./pages/MyOrders"));
const Checkout = lazy(() => import("./pages/Checkout"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

// Admin Pages
const Dashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const AdminProducts = lazy(() => import("./pages/Admin/AdminProducts"));
const AdminCustomers = lazy(() => import("./pages/Admin/AdminCustomers"));
const AdminTransactions = lazy(() => import("./pages/Admin/AdminTransactions"));

const App = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetUserQuery();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (data) {
      dispatch(userExists(data.user));
    } else if (!data) {
      dispatch(userNotExists());
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      ) : (
        <Suspense
          fallback={
            <CircularProgress
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
          }
        >
          <BrowserRouter>
            {user && user.role !== "admin" ? <Header /> : ""}
            <Routes>
              {/* Not logged in Route */}
              <Route
                path="/login"
                element={
                  <ProtectedRoute isAuthenticated={user ? false : true} redirect={user?.role === "admin" ? "/admin/dashboard" : "/"} >
                    <Login />
                  </ProtectedRoute>
                }
              />

              {/* Logged In User Routes */}
              <Route
                element={
                  <ProtectedRoute
                    isAuthenticated={user ? true : false} 
                  ></ProtectedRoute>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>
                <Route path="/success" element={<PaymentSuccess />} />


              {/* Admin Routes */}
              <Route
                element={
                  <ProtectedRoute
                  isAuthenticated={true}
                  adminOnly={true}
                  admin={user?.role === "admin" ? true : false}
                  />
                }
              >
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/customers" element={<AdminCustomers />} />
                <Route
                  path="/admin/transactions"
                  element={<AdminTransactions />}
                />
              </Route>

              
                <Route path="*" element={<Navigate to="/admin/dashboard" />} />
            </Routes>
            <Toaster
              position="bottom-left"
              reverseOrder={false}
              toastOptions={{ style: { fontFamily: "Poppins, sans-serif" } }}
            />
          </BrowserRouter>
        </Suspense>
      )}
    </>
  );
};

export default App;
