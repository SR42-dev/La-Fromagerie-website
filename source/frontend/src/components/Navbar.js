import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    
    <nav className="navbar">

      <div className="navbar__logo">
       <h2><a href ="https://en.wikipedia.org/wiki/Verghese_Kurien">Le Fromagerie</a></h2>
      </div>

      <ul className="navbar__links">
      <li>  <Link to="/" className = "links">Home</Link></li>
      <li> <Link to="/Contact" className = "links">About</Link></li>
      <li> <Link to="/CouponsZone" className = "links">Testimonials</Link></li>
      <li> <Link to="/Cheezus" className = "links">Cheezus+</Link></li>
    
      <li> <Link to="/About" className = "links">The Team</Link></li>
      <li> <Link to="/login" className = "links">Login</Link></li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Shopping Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>

        </li>



      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
