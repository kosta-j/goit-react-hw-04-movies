import { useEffect, useState } from 'react';
import * as moviesApiService from '../../Services/apiService';

function CastView({ movieId }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    moviesApiService.fetchMovieCast(movieId).then(resp => setCast(resp.cast));
  }, [cast, movieId]);
  return (
    <>
      <p>CastVew:</p>
      <ul>
        {cast &&
          cast.map(castItem => (
            <li key={castItem.id}>
              <div className="castItemWrapper">
                <img src="/" alt={castItem.name} width="100" />
                <p>{castItem.name}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export { CastView };
