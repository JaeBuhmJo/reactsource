import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 20, 30],
});

let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Gray and Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    carts: carts.reducer,
  },
});
