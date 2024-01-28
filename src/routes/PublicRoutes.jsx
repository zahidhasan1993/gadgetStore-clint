import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Product from "../components/product/Product";
import Cart from "../components/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
    ],
  },
]);
