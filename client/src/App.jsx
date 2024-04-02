import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const Category = lazy(() => import("./pages/Category"));
const MyOrders = lazy(() => import("./pages/MyOrders"));

const user = true;

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {user ? <Header /> : ""}
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
              
            </Route>

            {/* Admin Routes */}
            <Route
              element={
                <ProtectedRoute
                  isAuthenticated={user}
                  admin={true}
                  adminOnly={true}
                />
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            toastOptions={{ style: { fontFamily: "Poppins, sans-serif" } }}
          />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
