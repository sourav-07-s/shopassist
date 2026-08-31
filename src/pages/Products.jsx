import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import {
  getProducts,
  getCategories,
} from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] =
          await Promise.all([
            getProducts(),
            getCategories(),
          ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
          <p className="font-semibold text-slate-600">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6">

      <div className="py-14">
        <p className="text-xs font-bold tracking-[0.2em] text-indigo-600">
          OUR COLLECTION
        </p>

        <h1 className="mt-2 text-4xl font-black text-slate-900 sm:text-5xl">
          Explore Products
        </h1>

        <p className="mt-3 text-slate-500">
          Find something you'll love.
        </p>
      </div>

      {/* Search and filter */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">

        <input
          type="text"
          placeholder="🔎 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
        >
          <option value="all">
            All Categories
          </option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      <div className="mb-5 text-sm text-slate-500">
        Showing {filteredProducts.length} products
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center">
          <div className="text-center">
            <div className="text-5xl">🔎</div>
            <h2 className="mt-4 text-xl font-bold">
              No products found
            </h2>
            <p className="mt-2 text-slate-500">
              Try another search or category.
            </p>
          </div>
        </div>
      )}

    </main>
  );
}

export default Products;