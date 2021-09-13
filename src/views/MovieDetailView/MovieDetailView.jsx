import { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard';
import * as moviesApiService from '../../Services/apiService';

function MovieDetailView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApiService.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId, setMovie]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <>
      <button type="button">Go back</button>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}

export { MovieDetailView };
