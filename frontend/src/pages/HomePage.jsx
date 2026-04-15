import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/productApi";
import ProductTable from "../components/ProductTable";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await API.get("");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrorMessage("Could not load products from backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      setErrorMessage("Could not delete product.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Beauty Inventory</h1>
      <button onClick={() => navigate("/add")}>Add Product</button>

      {loading && <p>Loading products...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {!loading && !errorMessage && (
        <ProductTable products={products} onDelete={handleDelete} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default HomePage;