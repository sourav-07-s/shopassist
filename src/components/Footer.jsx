
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl shadow-lg shadow-indigo-600/20 transition group-hover:scale-105">
                🛍️
              </div>

              <div className="text-2xl font-black">
                Shop
                <span className="text-indigo-400">
                  Assist
                </span>
              </div>

            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-500">
              Your modern shopping destination with a smart
              personal assistant. Discover products, manage
              your wishlist, and shop with confidence.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-slate-400 backdrop-blur-xl transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                𝕏
              </a>

              <a
                href="https://www.linkedin.com/in/sourav-sahoo-74088432b/"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-slate-400 backdrop-blur-xl transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                in
              </a>

             <a
  href="https://github.com/sourav-07-s"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-xl transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.91-.622.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.91-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
    />
  </svg>
</a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-500 transition hover:text-indigo-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-500 transition hover:text-indigo-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/wishlist"
                  className="text-sm text-slate-500 transition hover:text-indigo-400"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-sm text-slate-500 transition hover:text-indigo-400"
                >
                  Shopping Cart
                </Link>
              </li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="space-y-3">

              <li>
                <button
                  onClick={() => {
                    window.dispatchEvent(
                      new Event("open-chatbot")
                    );
                  }}
                  className="text-sm text-slate-500 transition hover:text-indigo-400"
                >
                  Chat with Assistant
                </button>
              </li>

              <li>
                <span className="text-sm text-slate-500">
                  Shipping Information
                </span>
              </li>

              <li>
                <span className="text-sm text-slate-500">
                  Returns & Refunds
                </span>
              </li>

              <li>
                <span className="text-sm text-slate-500">
                  Secure Payments
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Newsletter Glass Card */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-lg font-bold">
                Stay in the loop
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Get updates about new products and offers.
              </p>

            </div>

            <div className="flex w-full max-w-md gap-2">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
              />

              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} ShopAssist. All rights reserved.
          </p>

          <div className="flex gap-5">

            <button className="transition hover:text-slate-400">
              Privacy
            </button>

            <button className="transition hover:text-slate-400">
              Terms
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
