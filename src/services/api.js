const API_URL = import.meta.env.VITE_PRODUCT_API_URL;

export const getProducts = async () => {
  const response = await fetch(
    `${API_URL}/products?limit=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};

export const getProduct = async (id) => {
  const response = await fetch(
    `${API_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(
    `${API_URL}/products/category-list`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};