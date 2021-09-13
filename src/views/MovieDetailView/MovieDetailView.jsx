import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';
import * as moviesApiService from '../../Services/apiService';
import s from './MovieDetailView.module.css';

function MovieDetailView() {
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApiService.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId, setMovie]);

  function handleGoBackButton() {
    history.goBack();
  }

  return (
    <>
      <Button onClick={handleGoBackButton}>
        <IconContext.Provider value={{ className: `${s.goBackButtonArrow}` }}>
          <BsArrowLeft />
        </IconContext.Provider>
        Go back
      </Button>
      {movie && <MovieCard movie={movie} />}
    </>
  );
}

export { MovieDetailView };
