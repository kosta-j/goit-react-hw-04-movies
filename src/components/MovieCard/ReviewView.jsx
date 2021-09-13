import { useEffect, useState } from 'react';
import * as moviesApiService from '../../Services/apiService';

function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApiService.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      <p>ReviewView</p>
      sds
    </>
  );
}

export { ReviewView };
