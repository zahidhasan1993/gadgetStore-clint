import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get("qty");

  console.log(qty);

  return <div>hello</div>;
};

export default Cart;
