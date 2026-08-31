import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

          <div>

            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-indigo-600">
              WELCOME TO SHOPASSIST
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Shop smarter.
              <br />
              Shop better.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover amazing products, save your favorites,
              manage your cart and get instant assistance from
              our virtual shopping assistant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-indigo-600"
              >
                Explore Products →
              </Link>

              <Link
                to="/wishlist"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
              >
                View Wishlist
              </Link>

            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl sm:p-12">

              <div className="mb-8 text-7xl">
                🛍️
              </div>

              <h2 className="text-3xl font-bold">
                Your personal shopping assistant
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Need help finding a product? Have questions
                about delivery or returns? Just open the chat
                and ask ShopAssist.
              </p>

              <div className="mt-8 rounded-xl bg-white/10 p-4">
                💬 "How can I return my order?"
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-7 shadow-sm">
          <div className="mb-4 text-3xl">🚚</div>
          <h3 className="text-lg font-bold">Fast Delivery</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Quick and reliable delivery for your orders.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-7 shadow-sm">
          <div className="mb-4 text-3xl">🔒</div>
          <h3 className="text-lg font-bold">Secure Shopping</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            A clean and secure shopping experience.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-7 shadow-sm">
          <div className="mb-4 text-3xl">🤖</div>
          <h3 className="text-lg font-bold">Smart Assistance</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Get instant answers from your shopping assistant.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;