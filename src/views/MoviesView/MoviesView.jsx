import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { MoviesList } from '../../components/MoviesList';
import { SearchBar } from '../../components/Searchbar';
import * as moviesApiService from '../../Services/apiService';

function MoviesView() {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');
    setQuery(searchQuery);
  }, [location.search]);

  useEffect(() => {
    if (!query) {
      return;
    }
    setQuery('');
    moviesApiService
      .fetchMoviesBySearch(query)
      .then(response => setMovies(response.results));
  }, [query]);

  const submitHandler = query => {
    setQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchBar onSubmit={submitHandler} />
      {movies && <MoviesList movies={movies} baseLocation={location} />}
    </>
  );
}

export { MoviesView };
