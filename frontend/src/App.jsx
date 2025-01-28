import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router";
import Homepage from "./component/Homepage/homepage";
import ProductPage from "./component/Product/ProductPage";
import ProductDetailPage from "./component/ProductDetail/ProductDetailPage";
import Login from "./component/Profile/Login";
import Register from "./component/Profile/Register";
import AuthMiddleware from "./middleware/AuthMiddleware";

function App() {
  return (
    <div className="relative bg-gray-100 min-h-screen App">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <AuthMiddleware>
                <Homepage />
              </AuthMiddleware>
            }
          />
          <Route
            path="/products"
            element={
              <AuthMiddleware>
                <ProductPage />
              </AuthMiddleware>
            }
          />
          <Route
            path="/products/:id"
            element={
              <AuthMiddleware>
                <ProductDetailPage />
              </AuthMiddleware>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
