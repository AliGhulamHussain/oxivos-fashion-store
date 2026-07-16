import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center">
        <h2>Product Not Found</h2>

        <p className="mt-2">
          The product you're looking for doesn't exist.
        </p>

        <Link className="btn mt-3" to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  const [selectedColor, setSelectedColor] =
    useState(product.colors[0]);

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <>
      <Link to="/products">← Back to Products</Link>

      <div className="product-details mt-3">
        {/* Image */}

        <div>
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* Info */}

        <div className="product-info">
          <h2>{product.name}</h2>

          <h3
            style={{
              color: "#ff9800",
              margin: "15px 0",
            }}
          >
            ${product.price}
          </h3>

          <p>
            ⭐ {product.rating} / 5
          </p>

          <p>{product.description}</p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.inStock ? (
              <span
                style={{ color: "green" }}
              >
                In Stock
              </span>
            ) : (
              <span
                style={{ color: "red" }}
              >
                Out of Stock
              </span>
            )}
          </p>

          {/* Sizes */}

          <div className="mt-3">
            <h4>Select Size</h4>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="btn"
                  onClick={() =>
                    setSelectedSize(size)
                  }
                  style={{
                    background:
                      selectedSize === size
                        ? "#222"
                        : "#ff9800",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}

          <div className="mt-3">
            <h4>Select Color</h4>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="btn"
                  onClick={() =>
                    setSelectedColor(color)
                  }
                  style={{
                    background:
                      selectedColor === color
                        ? "#222"
                        : "#ff9800",
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn mt-3"
            onClick={handleAdd}
            disabled={!product.inStock}
          >
            {added
              ? "✓ Added to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;