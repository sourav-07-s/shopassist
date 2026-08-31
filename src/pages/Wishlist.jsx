import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-10">
        <p className="text-xs font-bold tracking-[0.2em] text-indigo-600">
          YOUR FAVORITES
        </p>

        <h1 className="mt-2 text-4xl font-black">
          Wishlist ❤️
        </h1>

        <p className="mt-3 text-slate-500">
          Products you've saved for later.
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="flex min-h-[45vh] items-center justify-center text-center">

          <div>
            <div className="text-7xl">❤️</div>

            <h2 className="mt-5 text-2xl font-black">
              Your wishlist is empty
            </h2>

            <p className="mt-3 text-slate-500">
              Save products you love and find them here later.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-indigo-600"
            >
              Browse Products →
            </Link>
          </div>

        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </main>
  );
}

export default Wishlist;