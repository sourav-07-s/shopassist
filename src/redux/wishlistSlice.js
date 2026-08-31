import { createSlice } from "@reduxjs/toolkit";

const savedWishlist =
  JSON.parse(
    localStorage.getItem("shopassist-wishlist")
  ) || [];

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: savedWishlist,
  },

  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem(
        "shopassist-wishlist",
        JSON.stringify(state.items)
      );
    },
  },
});

export const { toggleWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;