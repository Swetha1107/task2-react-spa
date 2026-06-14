import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>📋 Products List</h1>

      <Link to="/add">
        <button className="add-btn">
          + Add New Product
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>

                <td>
                  <Link to={`/edit/${product._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(product._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;