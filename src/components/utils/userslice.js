import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //when an user signs in,add that user to the store
    addUser: (state, action) => {
      return action.payload;
    },
    //when an user signs out,remove from store
    removeUser: (state, action) => {
      return null;
    },
  },
});
export default userslice.reducer;
export const { addUser, removeUser } = userslice.actions;
