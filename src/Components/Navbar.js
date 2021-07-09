import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <a className="brand-logo" href="#">
          Jace's Emporium
        </a>
        <ul className="right">
          <li>
            <NavLink to="/shopping-cart/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
