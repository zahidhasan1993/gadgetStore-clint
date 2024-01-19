import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Gadget Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart className="fs-5" /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaRegUser className="fs-5" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
