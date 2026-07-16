import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  // ==========================
  // Empty Cart
  // ==========================

  if (cart.length === 0) {
    return (
      <section className="section">
        <div className="container">

          <div className="empty-products">

            <ShoppingBag
              size={80}
              color="#F59E0B"
            />

            <h2
              style={{ marginTop: "25px" }}
            >
              Your Cart is Empty
            </h2>

            <p className="mt-2">
              Looks like you haven't added
              anything yet.
            </p>

            <Link
              to="/products"
              className="btn mt-3"
            >
              Start Shopping
            </Link>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="section">

      <div className="container">

        {/* Header */}

        <Link
          to="/products"
          className="details-btn"
          style={{
            display: "inline-flex",
            marginBottom: "30px",
          }}
        >
          <ArrowLeft size={18} />

          Continue Shopping
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >

          {/* ======================
              Cart Items
          ======================= */}

          <div>

            {cart.map((item) => (

              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="cart-item"
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.name}
                />

                {/* Info */}

                <div
                  style={{
                    flex: 1,
                  }}
                >

                  <h3>{item.name}</h3>

                  <p>
                    <strong>
                      Category:
                    </strong>{" "}
                    {item.category}
                  </p>

                  <p>
                    <strong>
                      Color:
                    </strong>{" "}
                    {item.selectedColor}
                  </p>

                  <p>
                    <strong>
                      Size:
                    </strong>{" "}
                    {item.selectedSize}
                  </p>

                  <h3
                    style={{
                      color: "#F59E0B",
                      marginTop: "10px",
                    }}
                  >
                    ${item.price}
                  </h3>

                  {/* Quantity */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      marginTop: "20px",
                    }}
                  >

                    <button
                      className="category-btn"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.qty - 1
                        )
                      }
                    >
                      <Minus size={16} />
                    </button>

                    <strong>
                      {item.qty}
                    </strong>

                    <button
                      className="category-btn"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.qty + 1
                        )
                      }
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* Remove */}

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.selectedSize,
                        item.selectedColor
                      )
                    }
                    style={{
                      marginTop: "20px",
                      color: "crimson",
                      background: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >

                    <Trash2 size={18} />

                    Remove

                  </button>

                </div>

              </div>

            ))}
                      </div>

          {/* ======================
              Order Summary
          ======================= */}

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <p>
              <span>Items</span>

              <span>{cart.length}</span>
            </p>

            <p>
              <span>Subtotal</span>

              <span>${cartTotal.toFixed(2)}</span>
            </p>

            <p>
              <span>Shipping</span>

              <span>Free</span>
            </p>

            <hr />

            <h3>
              <span>Total</span>

              <span>${cartTotal.toFixed(2)}</span>
            </h3>

            <button
              className="btn"
              onClick={() => {
                clearCart();
                alert(
                  "Order placed successfully! Thank you for shopping with us."
                );
              }}
            >
              Proceed to Checkout
            </button>

            <button
              className="category-btn w-100 mt-3"
              onClick={clearCart}
            >
              Clear Cart
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Cart;