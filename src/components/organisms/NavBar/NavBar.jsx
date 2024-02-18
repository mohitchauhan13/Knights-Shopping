import { Link } from "react-router-dom";
import { logo } from "../../../assets/icons";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { CartDropdown, CartIcon } from "../../molecules";

import "./navBar.styles.scss";
import { CartContext } from "../../../context/CartContent";
import { signOutUser } from "../../../utils/firebase";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
