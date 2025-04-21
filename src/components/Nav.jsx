import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <Link to="about" className="enlace">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="menu" className="enlace">
            MENU
          </Link>
        </li>
        <li>
          <NavLink to="/booking">RESERVATIONS</NavLink>
        </li>
        <li>
          <Link to="orderOnline" className="enlace">
            ORDER ONLINE
          </Link>
        </li>
        <li>
          <Link to="login" className="enlace">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
