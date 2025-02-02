const BASE_URL = 'https://api.themoviedb.org/3/';
const TOP_RATED_MOVIE_URL = 'movie/top_rated';
const CATEGORIES_URL = 'genre/movie/list';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const POPULAR_MOVIE_URL = 'movie/popular';
const UPCOMING_MOVIE_URL = 'movie/upcoming';
const MOVIE_DETAIL_URL = `movie/`;
const SEARCH_MOVIE_URL = query => `search/movie?query=${query}&language=en-US`;
export {
  BASE_URL,
  TOP_RATED_MOVIE_URL,
  CATEGORIES_URL,
  IMAGE_BASE_URL,
  POPULAR_MOVIE_URL,
  UPCOMING_MOVIE_URL,
  MOVIE_DETAIL_URL,
  SEARCH_MOVIE_URL,
};
