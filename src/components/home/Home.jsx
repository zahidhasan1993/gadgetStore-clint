import { Container } from "react-bootstrap";
import LatestProducts from "./LatestProducts";
import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div>
      <main className="py-3">
        <Container>
          <LatestProducts products={products}></LatestProducts>
        </Container>
      </main>
    </div>
  );
};

export default Home;
