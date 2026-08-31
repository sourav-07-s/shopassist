import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const productImage =
    product.thumbnail ||
    product.images?.[0] ||
    product.image ||
    "";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.06]">

      {/* Wishlist */}
      <button
        type="button"
        onClick={() => dispatch(toggleWishlist(product))}
        className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-lg backdrop-blur-xl transition hover:scale-110 ${
          isWishlisted
            ? "text-red-500"
            : "text-slate-400 hover:text-white"
        }`}
      >
        {isWishlisted ? "❤️" : "♡"}
      </button>

      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-950/60 p-8">

          {productImage ? (
            <img
              src={productImage}
              alt={product.title}
              className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-center text-slate-500">
              <div className="text-4xl">🛍️</div>
              <p className="mt-2 text-xs">
                Image unavailable
              </p>
            </div>
          )}

        </div>
      </Link>

      {/* Details */}
      <div className="p-5">

        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-white transition hover:text-indigo-400"
        >
          {product.title}
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm">

          <span>⭐</span>

          <span className="font-semibold text-white">
            {product.rating ?? "N/A"}
          </span>

        </div>

        <div className="mt-5 flex items-center justify-between gap-3">

          <div>
            <span className="text-xl font-black text-white">
              ${Number(product.price).toFixed(2)}
            </span>

            {product.discountPercentage && (
              <p className="mt-1 text-xs font-semibold text-green-400">
                {Math.round(product.discountPercentage)}% OFF
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;