import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";

const Cart = () => {
  const { id } = useParams();
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get("qty");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  console.log(cartItems);

  return <div>hello</div>;
};

export default Cart;
