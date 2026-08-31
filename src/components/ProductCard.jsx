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

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Wishlist */}
      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 ${
          isWishlisted ? "text-red-500" : "text-slate-500"
        }`}
      >
        {isWishlisted ? "❤️" : "♡"}
      </button>

      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <div className="flex h-64 items-center justify-center bg-slate-50 p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Information */}
      <div className="p-5">

        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600"
        >
          {product.title}
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span>⭐</span>

          <span className="font-semibold">
            {product.rating?.rate || "N/A"}
          </span>

          <span className="text-slate-400">
            ({product.rating?.count || 0})
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">

          <span className="text-xl font-extrabold text-slate-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-indigo-600"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;