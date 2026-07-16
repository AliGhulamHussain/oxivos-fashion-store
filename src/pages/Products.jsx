import { useEffect, useState } from "react";

import products from "../data/products";

import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const categories = [
  "All",
  "Panjabi",
  "Shirts",
  "T-Shirts",
  "Pants",
  "Jeans",
  "Hoodies",
  "Jackets",
  "Shoes",
  "Accessories",
];

const Products = () => {
  const [loading, setLoading] = useState(true);

  const [filteredProducts, setFilteredProducts] =
    useState([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) => product.category === category
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      <h1
        className="text-center mb-3"
        style={{ marginBottom: "30px" }}
      >
        Our Collection
      </h1>

      {/* Categories */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className="btn"
            onClick={() =>
              handleFilter(category)
            }
            style={{
              background:
                activeCategory === category
                  ? "#222"
                  : "#ff9800",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}

      {loading ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h2>No products found.</h2>

          <p>
            Try selecting another category.
          </p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;