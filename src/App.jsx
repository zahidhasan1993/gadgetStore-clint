import { Outlet } from "react-router-dom";
import "./bootstrap.min.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
