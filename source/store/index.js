import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';

const store = configureStore({
  reducer: {
    watchList: watchListSlice,
  },
});

export default store;
