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
  className,
}) => {
  return (
    <>
      {tag === undefined && (
        <div
          className={[style.primaryButton, className].join(' ')}
          style={{ padding, fontSize }}
          onClick={onClick}
        >
          {children}
        </div>
      )}

      {tag === 'NavLink' && (
        <NavLink
          to={to}
          className={[className, style.primaryButton].join(' ')}
          style={{ padding, fontSize }}
          onClick={onClick}
        >
          {children}
        </NavLink>
      )}

      {tag === 'a' && (
        <a
          href={href}
          className={[style.primaryButton, className].join(' ')}
          style={{ padding, fontSize }}
          onClick={onClick}
        >
          {children}
        </a>
      )}

      {tag === 'button' && (
        <button
          type={buttonType}
          className={[style.primaryButton, className].join(' ')}
          style={{ padding, fontSize }}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
