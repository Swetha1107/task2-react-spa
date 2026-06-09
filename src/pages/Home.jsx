import { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default Home;