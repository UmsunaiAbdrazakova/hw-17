import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { MainComponent } from "./components/MainComponent";
import { Button } from "./components/UI/Button";
import { MyCart } from "./pages/MyCart";
import { MyOrders } from "./pages/MyOrders";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/product/:id/details" element={<ProductDetail />} />
      </Routes>
      <Button onClick={() => window.history.back()}>Go Back</Button>
    </>
  );
}

export default App;
