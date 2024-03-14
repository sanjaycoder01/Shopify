import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    isPlaying: false,
  },
  reducers: {
    videoVisible: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { videoVisible } = videoSlice.actions;
