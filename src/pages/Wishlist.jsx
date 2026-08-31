import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">

          <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Your Favorites
          </span>

          <h1 className="mt-5 text-4xl font-black">
            Wishlist ❤️
          </h1>

          <p className="mt-3 text-slate-500">
            Products you've saved for later.
          </p>

        </div>

        {wishlistItems.length === 0 ? (
          <div className="flex min-h-[45vh] items-center justify-center">

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center shadow-2xl backdrop-blur-xl">

              <div className="text-7xl">
                ❤️
              </div>

              <h2 className="mt-6 text-2xl font-black">
                Your wishlist is empty
              </h2>

              <p className="mt-3 text-slate-500">
                Save products you love and find them here later.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-bold shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                Browse Products →
              </Link>

            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>

    </main>
  );
}

export default Wishlist;