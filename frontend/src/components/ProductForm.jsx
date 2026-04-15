import React, { useEffect, useState } from "react";

function ProductForm({ onSubmit, initialData = null, submitLabel = "Save Product" }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name ?? "",
        category: initialData.category ?? "",
        brand: initialData.brand ?? "",
        price: initialData.price ?? "",
        quantity: initialData.quantity ?? "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      category: form.category.trim(),
      brand: form.brand.trim(),
      price: Number(form.price),
      quantity: Number(form.quantity),
    };

    console.log("Submitting form:", payload);
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "400px" }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="brand"
        placeholder="Brand"
        value={form.brand}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default ProductForm;