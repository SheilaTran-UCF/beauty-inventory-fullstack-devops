import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/productApi";
import ProductForm from "../components/ProductForm";

function AddProductPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (data) => {
    try {
      setErrorMessage("");
      await API.post("", data);
      alert("Product saved successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
      setErrorMessage("Failed to save product.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ProductForm onSubmit={handleSubmit} submitLabel="Save Product" />
    </div>
  );
}

export default AddProductPage;