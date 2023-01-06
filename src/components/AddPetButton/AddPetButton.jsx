import IconComponent from '../IconComponent';

import s from './AddPetButton.module.scss';

export default function AddPetButton({ handleClick }) {
  return (
    <button className={s.addPetButton} onClick={handleClick}>
      Add pet
      <span className={s.addPetIconThumb}>
        <IconComponent iconname="i-plusIcon5" classname={s.addPetIcon} />
      </span>
    </button>
  );
}
