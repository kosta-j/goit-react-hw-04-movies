import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "MoviesView" */),
);
const MovieDetailView = lazy(() =>
  import('./views/MovieDetailView' /* webpackChunkName: "MovieDetailView" */),
);

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route exact path="/movies">
              <MoviesView />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailView />
            </Route>
            <Route>
              <HomeView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
