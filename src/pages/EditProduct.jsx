import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const res = await api.get(`/${id}`);

      setName(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/${id}`, {
        name,
        price,
        category,
      });

      alert("Product Updated");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Product</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          type="text"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <button
          type="submit"
          className="add-btn"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;