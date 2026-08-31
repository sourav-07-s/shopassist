import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "../Layout/Layout";

import Home from "../pages/Home"
import Products from "../pages/Products"
import  ProductDetails  from "../pages/ProductDetails";
import  Cart  from "../pages/Cart";
import  Wishlist  from "../pages/Wishlist";

export const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [

        {
          index: true,
          element: <Home />,
        },

        {
          path: "products",
          element: <Products />,
        },

        {
          path: "products/:id",
          element: <ProductDetails />,
        },

        {
          path: "cart",
          element: <Cart />,
        },

        {
          path: "wishlist",
          element: <Wishlist />,
        },

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};