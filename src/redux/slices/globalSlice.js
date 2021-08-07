import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  themeMode: "light",
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: initialState,
  reducers: {
    loadingPage(state, action) {
      state.isLoading = action.payload;
    },
    themeModePage(state, action) {
      state.themeMode = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };
