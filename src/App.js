import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { fetchProducts, fetchProductDetails } from "./services/api";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleProductClick = async (productId) => {
    // Fetch details of the selected product
    try {
      const details = await fetchProductDetails(productId);
      setSelectedProduct(details);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className="app">
      <ProductList products={products} onProductClick={handleProductClick} />
      <ProductDetails product={selectedProduct} />
    </div>
  );
}

export default App;
