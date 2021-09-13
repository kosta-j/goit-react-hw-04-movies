import { useEffect, useState } from 'react';
import { MoviesList } from '../../components/MoviesList';
import { SearchBar } from '../../components/Searchbar';
import * as moviesApiService from '../../Services/apiService';

function MoviesView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    moviesApiService
      .fetchMoviesBySearch(query)
      .then(response => setMovies(response.results));
  }, [query]);

  const updateQuery = text => {
    setQuery(text);
  };

  return (
    <>
      <p>Movies View</p>
      <SearchBar onSubmit={updateQuery} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export { MoviesView };
