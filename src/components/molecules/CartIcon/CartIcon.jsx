import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../../assets/icons/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
