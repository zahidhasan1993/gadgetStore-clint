import { Container } from "react-bootstrap";
import products from "../../products.js";
import { useParams } from "react-router-dom";
const Product = () => {
  const {id} = useParams();
  const product = products.find(p => p._id === id);

  console.log(product);
  return (
    <main>
      <Container>
        <div className="my-3">
          <h1>{product.name}</h1>
        </div>
      </Container>
    </main>
  );
};

export default Product;
