import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ==========================
  // Add to Cart
  // ==========================

  const addToCart = (product) => {
    const quantityToAdd = product.qty ?? 1;
    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
    );

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
            ? {
                ...item,
                qty: item.qty + quantityToAdd,
              }
            : item
        )
      );
    } else {
      setCart((prev) => [
        ...prev,
        { ...product, qty: quantityToAdd },
      ]);
    }
  };

  // ==========================
  // Remove Item
  // ==========================

  const removeFromCart = (
    id,
    selectedSize,
    selectedColor
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  // ==========================
  // Update Quantity
  // ==========================

  const updateQuantity = (
    id,
    selectedSize,
    selectedColor,
    newQty
  ) => {
    if (newQty < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
          ? {
              ...item,
              qty: newQty,
            }
          : item
      )
    );
  };

  // ==========================
  // Clear Cart
  // ==========================

  const clearCart = () => {
    setCart([]);
  };

  // ==========================
  // Totals
  // ==========================

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ==========================
// Custom Hook
// ==========================

export const useCart = () =>
  useContext(CartContext);