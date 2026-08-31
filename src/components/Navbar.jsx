import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Refs for navigation items
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const wishlistRef = useRef(null);
  const cartRef = useRef(null);
  const navRef = useRef(null);

  // Sliding indicator position
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  // Find active navigation item
  const updateIndicator = () => {
    let activeElement = null;

    if (location.pathname === "/") {
      activeElement = homeRef.current;
    } else if (location.pathname === "/products") {
      activeElement = productsRef.current;
    } else if (location.pathname === "/wishlist") {
      activeElement = wishlistRef.current;
    } else if (location.pathname === "/cart") {
      activeElement = cartRef.current;
    }

    if (!activeElement || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = activeElement.getBoundingClientRect();

    setIndicator({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
      height: itemRect.height,
    });
  };

  // Update indicator when page changes
  useEffect(() => {
    updateIndicator();
  }, [location.pathname]);

  // Update indicator when window size changes
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 sm:px-6">
      <nav className="mx-auto w-full max-w-7xl">

        {/* Main Glass Navbar */}
        <div className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl ring-1 ring-white/5 transition-all duration-300 hover:border-indigo-400/20 sm:px-5">

          <div className="flex h-14 items-center justify-between gap-3 sm:h-16">

            {/* Logo */}
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/10 text-lg shadow-lg shadow-indigo-500/10 transition duration-300 group-hover:scale-105 group-hover:bg-indigo-500/20 sm:h-10 sm:w-10">
                🛍️
              </div>

              <div className="text-base font-black tracking-tight sm:text-xl">
                Shop
                <span className="text-indigo-400">
                  Assist
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <div
              ref={navRef}
              className="relative flex items-center rounded-full border border-white/5 bg-white/3 p-1 backdrop-blur-xl"
            >

              {/* Sliding Active Background */}
              <div
                className="pointer-events-none absolute rounded-full border border-indigo-400/20 bg-indigo-500/15 shadow-lg shadow-indigo-500/10 transition-all duration-300 ease-out"
                style={{
                  left: `${indicator.left}px`,
                  width: `${indicator.width}px`,
                  height: `${indicator.height}px`,
                  top: "4px",
                }}
              />

              {/* Home */}
              <Link
                ref={homeRef}
                to="/"
                className="relative z-10 rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:px-5 sm:text-sm"
              >
                Home
              </Link>

              {/* Products */}
              <Link
                ref={productsRef}
                to="/products"
                className="relative z-10 rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:px-5 sm:text-sm"
              >
                Products
              </Link>

              {/* Wishlist */}
              <Link
                ref={wishlistRef}
                to="/wishlist"
                aria-label="Wishlist"
                className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-base text-slate-300 transition-colors duration-200 hover:text-white sm:h-10 sm:w-10 sm:text-lg"
              >
                ❤️

                {wishlistItems.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white shadow-lg shadow-indigo-600/30 sm:h-5 sm:min-w-5 sm:text-[10px]">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                ref={cartRef}
                to="/cart"
                aria-label="Shopping Cart"
                className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-base text-slate-300 transition-colors duration-200 hover:text-white sm:h-10 sm:w-10 sm:text-lg"
              >
                🛒

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white shadow-lg shadow-indigo-600/30 sm:h-5 sm:min-w-5 sm:text-[10px]">
                    {cartCount}
                  </span>
                )}
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;