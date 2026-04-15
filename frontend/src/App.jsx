import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;