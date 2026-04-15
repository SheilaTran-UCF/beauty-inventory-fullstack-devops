import React from "react";

function ProductTable({ products, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="7">No products found.</td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => onEdit(product.id)}>Edit</button>
                <button onClick={() => onDelete(product.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;