import { GetUser } from "../../../actions/auth/GetUser";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: await GetUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, logout } = userSlice.actions;
