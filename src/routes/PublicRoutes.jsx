import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Product from "../components/product/Product";
import Cart from "../components/cart/Cart";
import Login from "../components/login/Login";
import Error from "../components/shared/Error";
import Register from "../components/login/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/cart/:id?",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
