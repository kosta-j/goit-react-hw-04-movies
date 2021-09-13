import { useEffect, useState } from 'react';
import * as moviesApiService from '../../Services/apiService';

function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApiService
      .fetchMovieReviews(movieId)
      .then(resp => setReviews(resp.results));
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li>
              <h4>Autor: {review.author}.</h4>
              <p>`{review.content}`</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export { ReviewView };
