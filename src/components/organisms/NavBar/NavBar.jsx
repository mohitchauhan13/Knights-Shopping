import { Link } from "react-router-dom";
import { logo } from "../../../assets/icons";
import { CartDropdown, CartIcon } from "../../molecules";

import "./navBar.styles.scss";
import { signOutUser } from "../../../utils/firebase";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";

const NavBar = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="navBar">
      <Link className="logo-container" to={"/"}>
        <img src={logo} alt="logo" width="148" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default NavBar;
