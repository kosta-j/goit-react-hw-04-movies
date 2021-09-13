import { useEffect, useState } from 'react';

import { MoviesList } from '../../components/MoviesList';
import * as moviesApiService from '../../Services/apiService';

function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApiService
      .fetchTrendingMovies()
      .then(response => setMovies(response.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
}

export { HomeView };
