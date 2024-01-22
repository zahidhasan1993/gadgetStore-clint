import { Container } from "react-bootstrap";
import LatestProducts from "./LatestProducts";
import products from "../../products.js";
const Home = () => {
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
