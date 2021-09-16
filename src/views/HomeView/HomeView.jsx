import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { MoviesList } from '../../components/MoviesList';
import * as moviesApiService from '../../Services/apiService';

function HomeView() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApiService
      .fetchTrendingMovies()
      .then(response => setMovies(response.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} baseLocation={location} />
    </main>
  );
}

export { HomeView };
