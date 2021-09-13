import { useEffect, useState } from 'react';
import * as moviesApiService from '../../Services/apiService';
import { getImageFullPath } from '../../Services/getImageFullPath';
import s from './MovieCard.module.css';

const IMG_WIDTH = '100';

function CastView({ movieId }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    moviesApiService.fetchMovieCast(movieId).then(resp => setCast(resp.cast));
  }, [movieId]);

  return (
    <>
      <ul className={s.castList}>
        {cast &&
          cast.map(castItem => (
            <li key={castItem.id} className={s.castItem}>
              <img
                src={getImageFullPath(castItem.profile_path, '200')}
                alt={castItem.name}
                width={IMG_WIDTH}
              />
              <p>{castItem.name}</p>
              <p>Character: {castItem.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export { CastView };
