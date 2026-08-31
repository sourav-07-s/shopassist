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
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">

          <div className="text-7xl">🛒</div>

          <h1 className="mt-5 text-3xl font-black">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-indigo-600"
          >
            Start Shopping →
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-10">
        <p className="text-xs font-bold tracking-[0.2em] text-indigo-600">
          YOUR SHOPPING BAG
        </p>

        <h1 className="mt-2 text-4xl font-black">
          Shopping Cart
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* Items */}
        <div className="space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border bg-white p-5 sm:flex-row sm:items-center"
            >

              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold leading-6">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-indigo-600">
                  ${item.price.toFixed(2)}
                </p>

                <div className="mt-4 flex items-center gap-3">

                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                    className="h-8 w-8 rounded-lg border hover:bg-slate-100"
                  >
                    −
                  </button>

                  <span className="font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                    className="h-8 w-8 rounded-lg border hover:bg-slate-100"
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
                    dispatch(removeFromCart(item.id))
                  }
                  className="mt-3 text-sm font-semibold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
          >
            Clear Cart
          </button>

        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-black">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-black">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          <button className="mt-6 w-full rounded-xl bg-indigo-600 py-4 font-bold text-white hover:bg-indigo-700">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </main>
  );
}

export default Cart;