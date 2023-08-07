import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Gray and Yordan", count: 1 },
  ],
  reducers: {
    //카트 수량 추가
    addCount(state, action) {
      let id = action.payload;
      let findProduct = state.find((cart) => cart.id == id);
      findProduct.count += 1;
    },
    //카트 수량 빼기
    subtractCount(state, action) {
      let id = action.payload;
      let findProduct = state.find((cart) => cart.id == id);
      findProduct.count -= 1;
    },
    //카트 추가
    addCart(state, action) {
      //사용자가 선택한 제품의 아이디와 수량 가져오기
      const product = action.payload.product;
      const amount = action.payload.amount;

      const item = { id: product.id, name: product.pname, count: Number(amount) };

      let idx = state.findIndex((cart) => cart.id == item.id);
      console.log(idx);
      if (idx > -1) {
        // 이미 담겨져 있는 제품인 경우는 수량만 추가
        state[idx].count += Number(amount);
      } else {
        state.push(item);
      }
    },
    subCart(state, action) {
      let deleteItem = state.findIndex((cart) => cart.id == action.payload);
      state.splice(deleteItem, 1);
    },
  },
});

export let { addCount, subtractCount, addCart, subCart } = carts.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    carts: carts.reducer,
  },
});
