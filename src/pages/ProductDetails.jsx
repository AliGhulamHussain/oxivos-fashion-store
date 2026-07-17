import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <section className="section">
        <div className="container text-center">

          <h2>Product Not Found</h2>

          <p className="mt-2">
            Sorry, the requested product does not exist.
          </p>

          <Link
            to="/products"
            className="btn mt-3"
          >
            Back to Products
          </Link>

        </div>
      </section>
    );
  }

  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );

  const [quantity, setQuantity] = useState(1);

  const [added, setAdded] = useState(false);

  const increaseQty = () =>
    setQuantity((prev) => prev + 1);

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      qty: quantity,
      selectedSize,
      selectedColor,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <section className="section">

      <div className="container">

        <Link
          to="/products"
          className="details-btn details-back-link"
        >
          <ArrowLeft size={18} />

          Back to Products
        </Link>

        <div className="product-details">

          {/* Product Image */}

          <div className="product-image-shell">

            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />

          </div>

          {/* Product Info */}

          <div className="product-info">

            <span
              className={
                product.inStock
                  ? "product-badge"
                  : "product-badge out"
              }
            >
              {product.inStock
                ? "In Stock"
                : "Out of Stock"}
            </span>

            <h2>{product.name}</h2>

            <div className="product-rating">

              <Star
                size={18}
                fill="#FACC15"
                color="#FACC15"
              />

              <span>
                {product.rating} / 5
              </span>

            </div>

            <h3>৳ {product.price}</h3>

            <p>
              {product.description}
            </p>

            {/* Size */}

            <div className="mt-3">

              <h4>Select Size</h4>

              <div className="detail-option-buttons">

                {product.sizes.map((size) => (

                  <button
                    key={size}
                    className={
                      selectedSize === size
                        ? "btn"
                        : "category-btn"
                    }
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>

            {/* Color */}

            <div className="mt-3">

              <h4>Select Color</h4>

              <div className="detail-option-buttons">

                {product.colors.map((color) => (

                  <button
                    key={color}
                    className={
                      selectedColor === color
                        ? "btn"
                        : "category-btn"
                    }
                    onClick={() =>
                      setSelectedColor(color)
                    }
                  >
                    {color}
                  </button>

                ))}

              </div>

            </div>

            {/* Quantity */}

            <div className="mt-3">

              <h4>Quantity</h4>

              <div className="quantity-control">


                <button
                  className="category-btn"
                  onClick={decreaseQty}
                >
                  <Minus size={16} />
                </button>

                <strong className="quantity-value">{quantity}</strong>

                <button
                  className="category-btn"
                  onClick={increaseQty}
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>

                        {/* Add To Cart */}

            <button
              className="btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {added ? (
                <>
                  <Check size={20} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart
                </>
              )}
            </button>

            {/* Extra Information */}

            <div className="product-features">

              <div className="product-feature">

                <Truck
                  size={22}
                  color="#F59E0B"
                />

                <div>

                  <strong>
                    Free Shipping
                  </strong>

                  <p>
                    Free delivery on orders over
                    ৳2000.
                  </p>

                </div>

              </div>

              <div className="product-feature">

                <ShieldCheck
                  size={22}
                  color="#10B981"
                />

                <div>

                  <strong>
                    Secure Checkout
                  </strong>

                  <p>
                    Your payment information is
                    protected with secure
                    encryption.
                  </p>

                </div>

              </div>

            </div>

            {/* Product Highlights */}

            <div className="product-highlights">


              <h4>
                Product Highlights
              </h4>

              <ul>

                <li>
                  Premium quality fabric
                </li>

                <li>
                  Comfortable regular fit
                </li>

                <li>
                  Perfect for everyday wear
                </li>

                <li>
                  Easy to wash and maintain
                </li>

                <li>
                  Durable stitching and finish
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;