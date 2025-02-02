import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';
import moviesSlice from './slice/moviesSlice';
const store = configureStore({
  reducer: {
    movies: moviesSlice,
    watchList: watchListSlice,
  },
});

export default store;
