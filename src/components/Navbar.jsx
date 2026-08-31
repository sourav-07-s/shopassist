import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Shop<span className="text-indigo-600">Assist</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">

          <Link
            to="/"
            className="hidden text-sm font-semibold text-slate-600 transition hover:text-indigo-600 sm:block"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hidden text-sm font-semibold text-slate-600 transition hover:text-indigo-600 sm:block"
          >
            Products
          </Link>

          <Link
            to="/wishlist"
            className="relative text-xl"
            title="Wishlist"
          >
            ❤️

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative text-xl"
            title="Cart"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;