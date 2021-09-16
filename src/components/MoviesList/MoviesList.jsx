import { Link } from 'react-router-dom';

function MoviesList({ movies, baseLocation }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  // eslint-disable-next-line no-restricted-globals
                  from: baseLocation,
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export { MoviesList };
