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
    const searchText = search.toLowerCase();

    const matchesSearch =
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

        <div className="text-center">

          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-indigo-500" />

          <p className="text-slate-400">
            Loading products...
          </p>

        </div>

      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-red-400">
        {error}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">

      {/* Glow */}
      <div className="pointer-events-none fixed left-1/3 top-40 h-64 w-64 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">

          <div className="mb-4 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Our Collection
          </div>

          <h1 className="text-4xl font-black sm:text-5xl">
            Explore Products
          </h1>

          <p className="mt-3 text-slate-500">
            Find something you'll love.
          </p>

        </div>

        {/* Search */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/3 p-3 shadow-xl backdrop-blur-xl">

          <div className="flex flex-col gap-3 sm:flex-row">

            <div className="relative flex-1">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
              />

            </div>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none focus:border-indigo-500/50"
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

        </div>

        {/* Result count */}
        <div className="mb-5 flex items-center justify-between">

          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-300">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          {(search || category !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="flex min-h-[40vh] items-center justify-center">

            <div className="rounded-3xl border border-white/10 bg-white/3 p-12 text-center backdrop-blur-xl">

              <div className="text-5xl">
                🔎
              </div>

              <h2 className="mt-5 text-xl font-bold">
                No products found
              </h2>

              <p className="mt-2 text-slate-500">
                Try another search or category.
              </p>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}

export default Products;