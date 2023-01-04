import sprite from '../../images/sprite.svg';

import s from './AddPetButton.module.scss';

export default function AddPetButton({ handleClick }) {
  return (
    <button className={s.addPetButton} onClick={handleClick}>
      Add pet
      <span className={s.addPetIconThumb}>
        <svg className={s.addPetIcon}>
          <use id="i-plusIcon5" href={`${sprite}#i-plusIcon5`} />
        </svg>
      </span>
    </button>
  );
}
