import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router";
import Homepage from "./component/Homepage/homepage";
import ProductPage from "./component/Product/ProductPage";
import ProductDetailPage from "./component/ProductDetail/ProductDetailPage";

function App() {
  return (
    <div className="relative bg-gray-100 min-h-screen App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/products" element={<ProductPage />} /> */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
