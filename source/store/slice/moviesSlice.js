import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getMovieData,
  getPopularMovies,
  getTopratedMovies,
  getUpcomingMovies,
} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  popularMovies: [],
  upcomingMovies: [],
  movieDetailData: {},
  pending: false,
  pendindgDetailData: false,
  error: '',
  categories: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopratedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopratedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending = false;
      })
      .addCase(getTopratedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.pending = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.pending = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getUpcomingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
        state.pending = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getMovieData.pending, state => {
        state.pendindgDetailData = true;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.movieDetailData = action.payload;
        state.pendindgDetailData = false;
      })
      .addCase(getMovieData.rejected, (state, action) => {
        state.error = action.error;
        state.pendindgDetailData = false;
      });
  },
});

export default moviesSlice.reducer;
