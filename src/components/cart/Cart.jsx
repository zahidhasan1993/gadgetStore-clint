import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";
import { FaRegTrashCan } from "react-icons/fa6";

import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import AlertMessage from "../shared/AlertMessage";

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get("qty");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const removeProduct = (id) => {
    console.log(id);
  }
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  console.log(cartItems);

  return (
    <main>
      <Container>
        <Row className="mt-3">
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <>
                <AlertMessage
                  variant="danger"
                  message="Your Cart Is Empty"
                  link={
                    <Link to="/" className="text-decoration-none fs-4">
                      &#8592; Go Back
                    </Link>
                  }
                ></AlertMessage>
              </>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroupItem key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link
                          to={`http://localhost:3000/api/products/${item.product}`}
                        >
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button type="button" variant="light" onClick={() => {removeProduct(item.product)}}>
                            <FaRegTrashCan />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Cart;
