import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/", {
        name,
        price,
        category,
      });

      alert("✅ Product Added Successfully");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;