import { Link } from "react-router-dom";
import Login from './Login';

function Navbar() {
  return (
    <nav className="navbar-main-wrapper">
      <div className="navbar-link-wrapper">
        <Link to="/">Home Page</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/current_order">Current Order</Link>
        <Link to="/book_table">Book Table</Link>
        <Link to="/contact_us">Contact Us</Link>
      </div>
      <Login/>
    </nav>
  );
}

export default Navbar;
