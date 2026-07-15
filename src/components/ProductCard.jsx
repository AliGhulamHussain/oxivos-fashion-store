import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <h3>{product.name}</h3>

        <p className="price">${product.price}</p>

        <button className="details-btn">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;