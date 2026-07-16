import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}

      <div className="product-image-wrapper">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {product.inStock ? (
          <span className="product-badge">
            New
          </span>
        ) : (
          <span className="product-badge out">
            Sold Out
          </span>
        )}
      </div>

      {/* Product Content */}

      <div className="product-content">
        <div className="product-rating">
          <Star
            size={16}
            fill="#FACC15"
            color="#FACC15"
          />

          <span>{product.rating}</span>
        </div>

        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <div className="product-footer">
          <h4>${product.price}</h4>

          <Link
            to={`/products/${product.id}`}
            className="details-btn"
          >
            View

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Hover Overlay */}

      <div className="card-overlay">
        <Link
          to={`/products/${product.id}`}
          className="quick-view-btn"
        >
          <ShoppingBag size={18} />

          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;