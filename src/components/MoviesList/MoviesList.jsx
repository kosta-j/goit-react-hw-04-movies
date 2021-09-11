function MoviesList({ movies }) {
  return (
    <ul>
      {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
    </ul>
  );
}

export { MoviesList };
