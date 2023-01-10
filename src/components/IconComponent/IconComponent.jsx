import sprite from '../../images/sprite.svg';

const IconComponent = ({ iconname, classname }) => {
  return (
    <svg className={classname}>
      <use id={iconname} href={`${sprite}#${iconname}`} />
    </svg>
  );
};

export default IconComponent;