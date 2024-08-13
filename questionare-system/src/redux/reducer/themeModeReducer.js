import { createSlice } from '@reduxjs/toolkit';

const getInitialDarkModeState = () => {
  const storedValue = localStorage.getItem("siteTheme");
  return storedValue === "dark";
}

const themeModeReducer = createSlice({
  name: 'darkMode',
  initialState: {
    value: getInitialDarkModeState(),
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
      localStorage.setItem("siteTheme", state.value ? "dark" : "light");
    },
    setDarkTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("siteTheme", state.value ? "dark" : "light");
    },
  },
});

export const { toggleDarkMode, setDarkTheme } = themeModeReducer.actions;
export default themeModeReducer.reducer;
