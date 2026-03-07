const BASE_URL = "https://dummyjson.com";

export const getProducts = async (limit = 12, skip = 0) => {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
};

export const getProductsByCategory = async (category, limit, skip) => {
  const res = await fetch(
    `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`,
  );
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};
