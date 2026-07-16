import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      {/* Hero */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-subtitle">
            NEW COLLECTION 2026
          </span>

          <h1>
            Elevate Your
            <br />
            Everyday Style
          </h1>

          <p>
            Discover premium fashion designed for
            modern lifestyles. Timeless pieces,
            quality fabrics, and effortless style.
          </p>

          <Link
            to="/products"
            className="btn hero-btn"
          >
            Shop Collection

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features */}

      <section className="features">
        <div className="container">
          <div className="feature-card">
            <Truck size={35} />

            <h3>Free Shipping</h3>

            <p>On all orders over $100.</p>
          </div>

          <div className="feature-card">
            <RotateCcw size={35} />

            <h3>Easy Returns</h3>

            <p>30-day hassle-free returns.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={35} />

            <h3>Secure Payment</h3>

            <p>100% protected checkout.</p>
          </div>

          <div className="feature-card">
            <Star size={35} />

            <h3>Premium Quality</h3>

            <p>Carefully selected materials.</p>
          </div>
        </div>
      </section>

      {/* Featured */}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Collection</h2>

            <Link to="/products">
              View All
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}

      <section className="promo">
        <div className="container promo-inner">
          <div>
            <span>LIMITED OFFER</span>

            <h2>Summer Sale</h2>

            <p>
              Up to 40% OFF selected fashion
              collections.
            </p>
          </div>

          <Link
            className="btn"
            to="/products"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Newsletter */}

      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated</h2>

          <p>
            Subscribe to receive exclusive offers and
            new arrivals.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button className="btn">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;