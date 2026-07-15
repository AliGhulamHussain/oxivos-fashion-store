import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          ShopEase
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </div>

        {/* Cart */}
        <Link to="/cart" className="cart-btn">
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
          >
            Cart ({cartCount})
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;