import { Route } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { HomeView } from './views/HomeView';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Route exact path="/">
          <HomeView />
        </Route>
      </Container>
    </div>
  );
}

export default App;
