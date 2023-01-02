import { useEffect, useRef, useState } from 'react';

import sprite from '../../../images/sprite.svg';

import s from './ProfileContactsItem.module.scss';

const ProfileContactsItem = ({
  name,
  type,
  activeContact,
  setActiveContact,
}) => {
  const ref = useRef();
  const [val, setVal] = useState('');

  useEffect(() => {
    ref.current.focus();
  }, [activeContact]);

  const handleInput = e => {
    const inputVal = e.target.value;
    setVal(inputVal);
  };

  const handleClick = e => {
    e.preventDefault();
    setActiveContact(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('fetching data');
    setActiveContact(null);
  };

  return (
    <li className={s.contactThumb}>
      <p className={s.contactType}>{name}</p>
      <form onSubmit={handleSubmit} className={s.contactForm}>
        <input
          type={type}
          className={s.contactInput}
          ref={ref}
          value={val}
          onChange={handleInput}
          disabled={activeContact !== name ? true : false}
        />
        {activeContact === name ? (
          <button className={s.contactButton} type="submit">
            <svg className={s.contactPenIcon}>
              <use id="checkedIcon" href={`${sprite}#checkedIcon`} />
            </svg>
          </button>
        ) : (
          <button
            className={s.contactButton}
            type="button"
            onClick={handleClick}
            disabled={activeContact !== name && activeContact ? true : false}
          >
            <svg className={s.contactPenIcon}>
              <use id="editPenIcon" href={`${sprite}#editPenIcon`} />
            </svg>
          </button>
        )}
      </form>
    </li>
  );
};

export default ProfileContactsItem;
