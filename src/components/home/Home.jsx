import { Container } from "react-bootstrap";
import LatestProducts from "./LatestProducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productList);

  return (
    <div>
      <main className="py-3">
        <Container>
          {loading ? (
            <h2>Loading</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <LatestProducts products={products}></LatestProducts>
          )}
        </Container>
      </main>
    </div>
  );
};

export default Home;
