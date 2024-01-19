import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <main className="py-3">
        <Container>
          <h1>This is home</h1>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
