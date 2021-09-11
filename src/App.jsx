import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { HomeView } from './views/HomeView';
import { MoviesView } from './views/MoviesView';
import { NotFoundView } from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/movies">
            <MoviesView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
