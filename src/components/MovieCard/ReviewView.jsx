import { useEffect, useState } from 'react';
import * as moviesApiService from '../../Services/apiService';

function ReviewView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesApiService
      .fetchMovieReviews(movieId)
      .then(resp => setReviews(resp.results));
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li>
              <h4>Autor: {review.author}.</h4>
              <p>`{review.content}`</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
}

export { ReviewView };
