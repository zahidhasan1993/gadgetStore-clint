import { Card, Col, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const LatestProducts = ({ products }) => {
  // console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Card className="my-3 p-3 rounded">
              <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
              </Link>

              <Card.Body>
                <Link to={`/product/${product._id}`}>
                  <Card.Title as="div">
                    <strong>{product.name}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as="div">
                  <div className="my-3 d-flex align-items-center gap-3">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={product.rating}
                      readOnly
                    />
                    {product.numReviews} reviews
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
