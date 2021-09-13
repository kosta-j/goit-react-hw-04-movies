import s from './AppBar.module.css';
import { Navigation } from '../Navigation/Navigation';

function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}

export { AppBar };
