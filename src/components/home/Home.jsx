import { Container } from "react-bootstrap";
import LatestProducts from "./LatestProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productList);
  const products = [];
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
