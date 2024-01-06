import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      ) : (
        <p>Select a product to view details</p>
      )}
    </div>
  );
};

export default ProductDetails;
