import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; All Rights Reserved by GadgetStore{" "}
            <a
              style={{ color: "blue", textDecoration: "none" }}
              href="https://zahidhasan1993.netlify.app/"
            >
              Zahid Hasan
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
