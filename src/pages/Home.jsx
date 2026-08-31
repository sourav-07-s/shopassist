import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-[10%] top-72 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Hero */}
      <section className="relative">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">

          {/* Left */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
              Next-generation shopping
            </div>

            <p className="mb-5 text-sm font-bold tracking-[0.3em] text-indigo-400">
              SHOPASSIST
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Shop smarter.
              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Shop better.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Discover amazing products, save your favorites,
              manage your cart and get instant assistance from
              your personal shopping assistant.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-bold shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
              >
                Explore Products →
              </Link>

              <Link
                to="/wishlist"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
              >
                ❤️ Wishlist
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 border-t border-white/10 pt-8">

              <div>
                <p className="text-2xl font-black">
                  20+
                </p>

                <p className="text-sm text-slate-500">
                  Products
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  24/7
                </p>

                <p className="text-sm text-slate-500">
                  Assistance
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  4.8★
                </p>

                <p className="text-sm text-slate-500">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* Assistant Glass Card */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-indigo-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-2xl sm:p-12">

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-5xl shadow-lg shadow-indigo-500/10">
                  🛍️
                </div>

                <h2 className="text-3xl font-bold">
                  Your personal shopping assistant
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Need help finding a product? Have questions
                  about delivery, returns or payments? Just ask
                  ShopAssist.
                </p>

                <div className="mt-8 space-y-3">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                    🤖 How can I return my order?
                  </div>

                  <div className="ml-8 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-indigo-200">
                    I can help you with that! 😊
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                    🤖 How long is delivery?
                  </div>

                  <div className="ml-8 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-indigo-200">
                    Standard delivery takes 3–7 business days.
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto grid max-w-7xl gap-5 px-6 py-16 md:grid-cols-3">

        {[
          {
            icon: "🚚",
            title: "Fast Delivery",
            text: "Quick and reliable delivery for your orders.",
          },
          {
            icon: "🔒",
            title: "Secure Shopping",
            text: "A clean and secure shopping experience.",
          },
          {
            icon: "🤖",
            title: "Smart Assistance",
            text: "Get instant answers from ShopAssist.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.07]"
          >

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/10 bg-indigo-500/10 text-2xl transition group-hover:scale-110">
              {feature.icon}
            </div>

            <h3 className="text-lg font-bold">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {feature.text}
            </p>

          </div>
        ))}

      </section>

    </main>
  );
}

export default Home;