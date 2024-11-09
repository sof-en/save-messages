import { createSlice } from "@reduxjs/toolkit";
export interface ILogin {
  login: string | number;
  password: string | number;
  succsess: boolean;
}
const initialState: ILogin = {
  login: "Save",
  password: "save1",
  succsess: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    validateLogin: (state, action) => {
      if (
        state.login === action.payload.login &&
        state.password === action.payload.password
      ) {
        state.succsess = true;
      }
    },
  },
});

export const loginReducers = loginSlice.reducer;
export const loginActions = loginSlice.actions;
