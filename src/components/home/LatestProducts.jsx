import { Card, Col, Row } from "react-bootstrap";
const LatestProducts = ({ products }) => {
  console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Card className="my-3 p-3 rounded">
              <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
              </a>

              <Card.Body>
                <a href={`/product/${product._id}`}>
                  <Card.Title as="div">
                    <strong>{product.name}</strong>
                  </Card.Title>
                </a>
                <Card.Text as="div">
                  <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                  </div>
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default LatestProducts;