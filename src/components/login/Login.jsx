import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import AlertMessage from "../shared/AlertMessage";
import Spinner from "../shared/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo } = userLogin;
  console.log(userInfo);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (userInfo?.email) {
      navigate("/");
    }
  }, [userInfo?.email, navigate]);
  return (
    <Container>
      <main>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Sign In</h1>
            {userInfo?.error && (
              <AlertMessage
                variant="danger"
                message={userInfo?.message}
              ></AlertMessage>
            )}
            {loading && <Spinner></Spinner>}
            <Form onSubmit={loginHandler}>
              <FormGroup controlId="email">
                <FormLabel>Email Address</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Enter Your Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="password" className="my-3">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Enter Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></FormControl>
              </FormGroup>

              <Button type="submit" className="my-3" variant="primary">
                Sign In
              </Button>
              <div className="py-3">
                New Customer? <Link to={"/register"}>Register</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default Login;
