import { NavLink } from 'react-router-dom';
import style from './SecondaryButton.module.scss';

const SecondaryButton = ({
  padding,
  fontSize,
  children,
  tag,
  to,
  href,
  buttonType,
  onClick,
  onSubmit,
  className,
  color,
}) => {
  return (
    <>
      {tag === undefined && (
        <div
          className={`${style.secondaryButton} ${className}`}
          style={{ padding, fontSize, color }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </div>
      )}

      {tag === 'NavLink' && (
        <NavLink
          to={to}
          className={`${style.secondaryButton} ${className}`}
          style={{ padding, fontSize, color }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </NavLink>
      )}

      {tag === 'a' && (
        <a
          href={href}
          className={`${style.secondaryButton} ${className}`}
          style={{ padding, fontSize, color }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </a>
      )}

      {tag === 'button' && (
        <button
          type={buttonType}
          className={`${style.secondaryButton} ${className}`}
          style={{ padding, fontSize, color }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default SecondaryButton;
