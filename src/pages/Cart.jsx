import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 pt-32 text-white">

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center shadow-2xl backdrop-blur-xl">

          <div className="text-7xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-bold shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            Start Shopping →
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">

          <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Your Shopping Bag
          </span>

          <h1 className="mt-5 text-4xl font-black">
            Shopping Cart
          </h1>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Items */}
          <div className="space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-xl transition hover:border-indigo-500/20 hover:bg-white/[0.06] sm:flex-row sm:items-center"
              >

                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-black/20 p-3">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition group-hover:scale-105"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-bold leading-6 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-indigo-400">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                    >
                      −
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="sm:text-right">

                  <p className="text-lg font-black">
                    $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                    className="mt-3 text-sm font-semibold text-red-400 transition hover:text-red-300"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            <button
              onClick={() => dispatch(clearCart())}
              className="rounded-xl border border-red-500/10 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/20"
            >
              Clear Cart
            </button>

          </div>

          {/* Summary */}
          <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-2xl">

            <h2 className="text-xl font-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="my-5 border-t border-white/10" />

              <div className="flex justify-between text-xl font-black">

                <span>Total</span>

                <span className="text-indigo-400">
                  ${total.toFixed(2)}
                </span>

              </div>

            </div>

            <button className="mt-7 w-full rounded-xl bg-indigo-600 py-4 font-bold shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-500">
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-slate-600">
              Secure checkout · 30-day returns
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Cart;