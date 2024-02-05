import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {
  const user = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const { userInfo } = user;

  const logOutHandler = () => {
    dispatch(logout());
  }
  console.log(userInfo);
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            Gadget<span className="text-danger">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart className="" /> Cart
              </Nav.Link>
              {userInfo?.email ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <Link to="/profile" className="text-decoration-none fs-5">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Item onClick={logOutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href="/login">
                  <FaRegUser className="" /> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
