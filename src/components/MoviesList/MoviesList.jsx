import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export { MoviesList };
