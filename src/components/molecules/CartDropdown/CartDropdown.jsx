import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import { CartContext } from "../../../context/CartContent";
import CartItem from "../CartItem";
import { Button } from "../../atoms";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items styled-scrollbar">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
