import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div
        className="text-center"
        style={{
          marginTop: "100px",
        }}
      >
        <h1>🛒</h1>

        <h2>Your Cart is Empty</h2>

        <p className="mt-2">
          Looks like you haven't added anything
          yet.
        </p>

        <Link
          className="btn mt-3"
          to="/products"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-3">Shopping Cart</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* Cart Items */}

        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div
                style={{
                  flex: 1,
                }}
              >
                <h3>{item.name}</h3>

                <p>
                  ${item.price}
                </p>

                <p>
                  Size:{" "}
                  {item.selectedSize}
                </p>

                <p>
                  Color:{" "}
                  {item.selectedColor}
                </p>

                {/* Quantity */}

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <button
                    className="btn"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.qty - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.qty}
                  </span>

                  <button
                    className="btn"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.qty + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  style={{
                    marginTop: "15px",
                    background: "transparent",
                    color: "red",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            height: "fit-content",
            boxShadow:
              "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <h2>Order Summary</h2>

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <p
            style={{
              display: "flex",
              justifyContent:
                "space-between",
            }}
          >
            <span>Subtotal</span>

            <span>${cartTotal}</span>
          </p>

          <p
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              margin: "15px 0",
            }}
          >
            <span>Shipping</span>

            <span>Free</span>
          </p>

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <h3
            style={{
              display: "flex",
              justifyContent:
                "space-between",
            }}
          >
            <span>Total</span>

            <span>${cartTotal}</span>
          </h3>

          <button
            className="btn"
            style={{
              width: "100%",
              marginTop: "25px",
            }}
            onClick={() =>
              alert(
                "Checkout is disabled in this demo."
              )
            }
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;