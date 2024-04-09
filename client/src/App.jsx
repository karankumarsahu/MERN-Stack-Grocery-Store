import { Navigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
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



const admin = false;

const App = () => {
  
  const dispatch = useDispatch();

   const { data , isLoading } = useGetUserQuery();
  
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {

    if (data) {
      dispatch(userExists(data.user))
    }
    else{
      dispatch(userNotExists())
    }
  }, [data , dispatch])
  
  return (
    <>
     {isLoading ? <CircularProgress sx={{position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)"}} /> : (
       <Suspense fallback={<CircularProgress sx={{position:"absolute",top:"50%",left:"50%", transform:"translate(-50%,-50%)"}} />}>
       <BrowserRouter>
         {user && !admin ? <Header /> : ""}
         <Routes>
           {/* Login Route */}
           <Route
             path="/login"
             element={
               <ProtectedRoute isAuthenticated={!user} redirect="/">
                 <Login />
               </ProtectedRoute>
             }
           />
           {/* Logged In User Routes */}
           <Route element={<ProtectedRoute isAuthenticated={user} />}>
             <Route path="/" element={<Home />} />
             <Route path="/category/:categoryName" element={<Category />} />
             <Route path="/myorders" element={<MyOrders />} />
             <Route path="/checkout" element={<Checkout />} />
             <Route path="/success" element={<PaymentSuccess />} />
           </Route>

           {/* Admin Routes */}
           <Route
             element={
               <ProtectedRoute
               isAuthenticated={user ? true : false}
               adminOnly={true}
               admin={user && user.role === "admin"}
               redirect="/admin/dashboard"
               />
             }
           >
             <Route path="/admin/dashboard" element={<Dashboard />} />
             <Route path="/admin/products" element={<AdminProducts />} />
             <Route path="/admin/customers" element={<AdminCustomers />} />
             <Route path="/admin/transactions" element={<AdminTransactions />} />
             <Route path="*" element={<Navigate to="/admin/dashboard" />} />
           </Route>
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
