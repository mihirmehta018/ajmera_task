const API_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
};

export const fetchProductDetails = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`);
  const data = await response.json();
  return data;
};
