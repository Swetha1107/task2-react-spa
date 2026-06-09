import { useState } from "react";
import api from "../api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/", {
        name,
        price,
        category
      });

      alert("Product Added");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;