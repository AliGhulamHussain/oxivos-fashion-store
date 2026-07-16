import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import products from "../data/products";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const categories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

const Products = () => {
  const [loading, setLoading] =
    useState(true);

  const [filteredProducts, setFilteredProducts] =
    useState([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter(
        (item) =>
          item.category === activeCategory
      );
    }

    if (search) {
      result = result.filter((item) =>
        item.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, search]);

  return (
    <section>
      <div className="container">
        <div className="products-header">
          <div>
            <h1>Shop Collection</h1>

            <p>
              Browse our premium fashion
              collection.
            </p>
          </div>

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        {/* Categories */}

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active-category"
                  : "category-btn"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <p className="products-count">
          {filteredProducts.length} Products Found
        </p>

        {loading ? (
          <Loader />
        ) : filteredProducts.length === 0 ? (
          <div className="empty-products">
            <h2>No Products Found</h2>

            <p>
              Try another search or category.
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
      </div>
    </section>
  );
};

export default Products;