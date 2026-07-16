import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          marginBottom: "50px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Elevate Your Style
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto 30px",
              fontSize: "1.1rem",
            }}
          >
            Discover premium fashion for every occasion.
            Modern styles, quality fabrics, and timeless elegance.
          </p>

          <Link className="btn" to="/products">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}

      <section>
        <h2 className="mb-3 text-center">
          Featured Products
        </h2>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          marginTop: "70px",
          padding: "60px 20px",
          textAlign: "center",
          background: "#222",
          color: "#fff",
          borderRadius: "12px",
        }}
      >
        <h2>Explore Our Complete Collection</h2>

        <p
          style={{
            margin: "20px auto",
            maxWidth: "650px",
          }}
        >
          Browse our latest arrivals and timeless
          classics crafted for every season.
        </p>

        <Link className="btn" to="/products">
          View All Products
        </Link>
      </section>
    </>
  );
};

export default Home;