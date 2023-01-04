import { NavLink } from 'react-router-dom';
import style from './PrimaryButton.module.scss';

const PrimaryButton = ({
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
}) => {
  return (
    <>
      {tag === undefined && (
        <div
          className={`${style.primaryButton} ${className}`}
          style={{ padding, fontSize }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </div>
      )}

      {tag === 'NavLink' && (
        <NavLink
          to={to}
          className={`${style.primaryButton} ${className}`}
          style={{ padding, fontSize }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </NavLink>
      )}

      {tag === 'a' && (
        <a
          href={href}
          className={`${style.primaryButton} ${className}`}
          style={{ padding, fontSize }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </a>
      )}

      {tag === 'button' && (
        <button
          type={buttonType}
          className={`${style.primaryButton} ${className}`}
          style={{ padding, fontSize }}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
