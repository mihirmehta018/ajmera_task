import React from "react";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onProductClick(product.id)}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
