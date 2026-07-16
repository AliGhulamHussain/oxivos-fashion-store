import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/products",
    },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}

        <Link
          to="/"
          className="logo"
        >
          Oxivos
          <span>Fashion</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right */}

        <div className="nav-right">

          <Link
            to="/cart"
            className="cart-icon"
          >
            <ShoppingBag size={22} />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="mobile-toggle"
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

      </div>

      {/* Mobile */}

      <div
        className={`mobile-menu ${
          isOpen ? "show" : ""
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() =>
              setIsOpen(false)
            }
            className={({ isActive }) =>
              isActive
                ? "mobile-link active"
                : "mobile-link"
            }
          >
            {link.name}
          </NavLink>
        ))}

        <Link
          to="/cart"
          className="mobile-link"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Cart ({cartCount})
        </Link>
      </div>
    </header>
  );
};

export default Navbar;