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
import Spinner from "../shared/Spinner";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import AlertMessage from "../shared/AlertMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo } = userLogin;

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("PASSWORD DONT MATCH");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo?.email) {
      navigate("/");
    }
  }, [navigate, userInfo?.email]);
  return (
    <Container>
      <main>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Register</h1>
            {userInfo?.error && (
              <AlertMessage
                variant="danger"
                message={userInfo?.message}
              ></AlertMessage>
            )}
            {message && (
              <AlertMessage variant="danger" message={message}></AlertMessage>
            )}
            {loading && <Spinner></Spinner>}
            <Form onSubmit={registerHandler}>
              <FormGroup controlId="name" className="my-3">
                <FormLabel>Full Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></FormControl>
              </FormGroup>
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
              <FormGroup controlId="password" className="my-3">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Enter Your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></FormControl>
              </FormGroup>

              <Button type="submit" className="my-3" variant="primary">
                Register
              </Button>
              <div className="py-3">
                Have an account? <Link to="/login">Login</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default Register;
