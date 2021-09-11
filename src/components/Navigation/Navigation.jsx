import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={s.navItem}
        activeClassName={s.navItemActive}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.navItem}
        activeClassName={s.navItemActive}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export { Navigation };
