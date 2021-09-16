import moment from 'moment';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { getImageFullPath } from '../../Services/getImageFullPath';
import { CastView } from './CastView';
import s from './MovieCard.module.css';
import { ReviewView } from './ReviewView';

const IMG_WIDTH = '300';

function MovieCard({ movie, baseLocation }) {
  const { genres, title, vote_average, overview, release_date, poster_path } =
    movie;
  const year = moment(release_date).format('yyyy');
  const { url } = useRouteMatch();

  return (
    <>
      <div className={s.mainMovieDetailsWrapper}>
        <img
          src={getImageFullPath(poster_path, IMG_WIDTH)}
          width={IMG_WIDTH}
          alt={title}
          className={s.poster}
        />
        <div className={s.movieDetailsTextWrapper}>
          <h1 className={s.heading}>
            {title}({year})
          </h1>
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={s.genres}>
            {genres.map(item => (
              <li key={item.id} className={s.genresItem}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />

      <div className={s.additionalDetailsWrapper}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink
              to={{ pathname: `${url}/cast`, state: { from: baseLocation } }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: `${url}/review`, state: { from: baseLocation } }}
            >
              Review
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Switch>
        <Route path={`${url}/cast`}>
          <CastView movieId={movie.id} />
        </Route>
        <Route path={`${url}/review`}>
          <ReviewView movieId={movie.id} />
        </Route>
      </Switch>
    </>
  );
}

export { MovieCard };
