import * as moviesApiService from '../../Services/apiService';

function HomeView() {
  moviesApiService.fetchTrendingMovies();

  return <p>Home View</p>;
}

export { HomeView };
