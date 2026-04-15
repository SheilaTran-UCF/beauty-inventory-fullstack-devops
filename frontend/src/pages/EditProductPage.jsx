import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/productApi";
import ProductForm from "../components/ProductForm";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error loading product:", error);
        setErrorMessage("Failed to load product.");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      setErrorMessage("");
      await API.put(`/${id}`, data);
      alert("Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      setErrorMessage("Failed to update product.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Product</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {product ? <ProductForm onSubmit={handleSubmit} initialData={product} submitLabel="Update Product" /> : <p>Loading...</p>}
    </div>
  );
}

export default EditProductPage;