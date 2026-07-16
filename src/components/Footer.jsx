import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Brand */}

        <div>
          <h2 className="footer-logo">
            Oxivos<span>Fashion</span>
          </h2>

          <p className="footer-text">
            Discover premium fashion that
            combines elegance, comfort, and
            modern style. Crafted for every
            season and every occasion.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3>Contact</h3>

          <div className="footer-contact">

            <p>
              <Mail size={18} />
              hello@oxivosfashion.com
            </p>

            <p>
              <Phone size={18} />
              +880 1688-339967
            </p>

            <p>
              <MapPin size={18} />
              Dhaka, Bangladesh
            </p>

          </div>
        </div>

        {/* Social */}

        <div>
          <h3>Follow Us</h3>

    <div className="social-icons">
  <a
    href="#"
    aria-label="Website"
  >
    <Globe />
  </a>

  <a href="mailto:hello@oxivosfashion.com">
    <Mail />
  </a>

  <a href="tel:+8801688339967">
    <Phone />
  </a>
</div>

          <p className="newsletter-text">
            Stay updated with our newest
            arrivals and exclusive offers.
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}{" "}
        <strong>OxivosFashion</strong>.
        All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;