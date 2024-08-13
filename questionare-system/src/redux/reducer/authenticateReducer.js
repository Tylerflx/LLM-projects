import { createSlice } from '@reduxjs/toolkit';


const getInitialDarkModeState = () => {
    const storedValue = localStorage.getItem("user-token");
    return storedValue;
  }
const init = {
    token : getInitialDarkModeState(),
    authenticated: false
}

const authenticateReducer = createSlice({
    name: 'authenticate',
    initialState: init,
    reducers: {
      toggleDarkMode: (state) => {
        state.value = !state.value;
      },
      setAuthenticated: (state, action) => {
        state.authenticated = action.payload;
      },
    },
  });

  export const { toggleDarkMode, setAuthenticated } = authenticateReducer.actions;
export default authenticateReducer.reducer;