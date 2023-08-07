import { createSlice } from "@reduxjs/toolkit";

// 공유할 상태 생성
let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 25 },
  reducers: {
    changeName(state) {
      //   return "john " + state;
      state.name = "park";
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

// 함수 내보내기
export let { changeName, changeAge } = user.actions;

export default user;
