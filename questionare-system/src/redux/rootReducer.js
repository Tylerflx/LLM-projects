import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './reducer/themeModeReducer'


const store = configureStore({
    reducer: {
      darkMode: darkModeReducer
    },
  });


export default store;