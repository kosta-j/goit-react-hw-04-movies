// import PropTypes from 'prop-types';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (query.trim() === '') {
    //   return toast.warn('Empty request - please input a query');
    // }
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };

export { SearchBar };
