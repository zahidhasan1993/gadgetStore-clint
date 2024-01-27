import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../actions/productActions";
import Spinner from "../shared/Spinner";
import AlertMessage from "../shared/AlertMessage";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  console.log(product);
  return (
    <main>
      <Container className="my-3">
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <AlertMessage variant="error"></AlertMessage>
        ) : (
          <>
            <Link to="/" className="btn">
              <span className="fs-2">&#8592;</span>Go Back
            </Link>
            <Row>
              <Col md={6}>
                <Image src={product?.image} alt="Product Image" fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h3>{product?.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem className="">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={product?.rating}
                      readOnly
                    ></Rating>
                    <p>{product?.numReviews} reviews</p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <h3>Price: ${product?.price}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p>Description : {product?.description}</p>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product?.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          <strong>
                            {product?.countInStock > 0
                              ? "In Stock"
                              : "Out Of Stock"}
                          </strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button
                        size="md"
                        className="w-100"
                        type="button"
                        disabled={product?.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </main>
  );
};

export default Product;
