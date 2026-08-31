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
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const data = await getProduct(id);

        setProduct(data);

        setSelectedImage(
          data.thumbnail ||
            data.images?.[0] ||
            ""
        );
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
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-indigo-500" />

          <p className="text-slate-400">
            Loading product...
          </p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-5xl">😕</p>

          <h1 className="mt-5 text-2xl font-black">
            Product not found
          </h1>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-bold"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const images = [
    ...(product.images || []),
    product.thumbnail,
  ].filter(Boolean);

  const mainImage =
    selectedImage ||
    images[0] ||
    "";

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">

      <div className="mx-auto max-w-7xl">

        <Link
          to="/products"
          className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-indigo-400 backdrop-blur-xl hover:bg-white/[0.08]"
        >
          ← Back to Products
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl md:p-10">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Images */}
            <div>

              <div className="flex min-h-[450px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 p-10">

                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="max-h-[420px] max-w-full object-contain transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="text-center text-slate-500">
                    <div className="text-6xl">
                      🛍️
                    </div>

                    <p className="mt-3">
                      Image unavailable
                    </p>
                  </div>
                )}

              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto">

                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={`${image}-${index}`}
                      onClick={() =>
                        setSelectedImage(image)
                      }
                      className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border bg-slate-950/70 p-2 transition ${
                        selectedImage === image
                          ? "border-indigo-500 bg-indigo-500/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <span className="w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase text-indigo-400">
                {product.category}
              </span>

              {product.brand && (
                <p className="mt-4 text-sm text-slate-500">
                  Brand:{" "}
                  <span className="text-slate-300">
                    {product.brand}
                  </span>
                </p>
              )}

              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {product.title}
              </h1>

              <div className="mt-5 flex items-center gap-3">

                <span className="rounded-lg bg-yellow-500/10 px-3 py-1 text-yellow-400">
                  ⭐ {product.rating}
                </span>

                <span className="text-sm text-slate-500">
                  {product.reviews?.length || 0} reviews
                </span>

              </div>

              <p className="mt-7 text-4xl font-black">
                ${Number(product.price).toFixed(2)}
              </p>

              {product.discountPercentage && (
                <p className="mt-2 font-bold text-green-400">
                  {Math.round(product.discountPercentage)}% OFF
                </p>
              )}

              <p className="mt-6 leading-8 text-slate-400">
                {product.description}
              </p>

              <p className="mt-5 text-sm text-slate-400">
                <span className="text-green-400">
                  ●
                </span>{" "}
                {product.stock} items in stock
              </p>

              <button
                type="button"
                onClick={() =>
                  dispatch(addToCart(product))
                }
                className="mt-8 rounded-xl bg-indigo-600 px-6 py-4 font-bold shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-500"
              >
                🛒 Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;