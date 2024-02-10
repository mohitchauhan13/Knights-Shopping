import { Link, Outlet } from "react-router-dom";
import { Logo } from "../../../assets/icons";

import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link className="logo-container" to={"/"}>
          <img src={Logo} alt="logo" width="164" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
