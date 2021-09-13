import s from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      {children}
    </button>
  );
}

export { Button };
