import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getProduct } from "../services/api";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <Link
        to="/products"
        className="font-semibold text-indigo-600 hover:text-indigo-800"
      >
        ← Back to Products
      </Link>

      <div className="mt-8 grid gap-12 rounded-3xl border bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

        {/* Image */}
        <div className="flex min-h-[450px] items-center justify-center rounded-2xl bg-slate-50 p-10">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[450px] max-w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            {product.category}
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-2">
            ⭐
            <strong>
              {product.rating?.rate}
            </strong>
            <span className="text-slate-500">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <p className="mt-6 text-3xl font-black">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6 leading-7 text-slate-600">
            {product.description}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-8 rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:bg-indigo-600"
          >
            🛒 Add to Cart
          </button>

          <div className="mt-8 space-y-3 border-t pt-6 text-sm text-slate-600">
            <p>🚚 Free standard delivery</p>
            <p>🔒 Secure checkout</p>
            <p>↩️ 30-day return policy</p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;