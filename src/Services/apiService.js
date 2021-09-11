const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c70928e47c981dc1f4156fc7f55e57c1';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

function fetchTrendingMovies() {
  fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  ).then(console.log);
}

function fetchMoviesBySearch(query) {
  fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  ).then(console.log);
}

function fetchMovieDetails(movie_id) {
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`,
  ).then(console.log);
}

function fetchMovieCast(movie_id) {
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`,
  ).then(console.log);
}

function fetchMovieReviews(movie_id) {
  fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`,
  ).then(console.log);
}

export {
  fetchTrendingMovies,
  fetchMoviesBySearch,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
