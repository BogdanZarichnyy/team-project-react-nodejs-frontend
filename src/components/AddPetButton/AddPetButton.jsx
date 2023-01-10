import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getUserTokenSelector } from '../../store/user';
import AddPetProfile from '../AddPetProfile';
import IconComponent from '../IconComponent';
import { ModalContext } from '../ModalRework';

import s from './AddPetButton.module.scss';

const AddPetButton = () => {
  const isLogedIn = useSelector(getUserTokenSelector);

  const { handleModal } = useContext(ModalContext);

  const clickAddPetButton = event => {
    if (!isLogedIn) {
      alert('Please log in!');
      event.preventDefault();
      return;
    }

    event.preventDefault();
  };

  const handleClickOpen = () => {
    handleModal(<AddPetProfile />, s.modalBody);
  };

  return (
    <button
      className={s.addPetButton}
      onMouseDown={clickAddPetButton}
      onClick={handleClickOpen}
    >
      Add pet
      <span className={s.addPetIconThumb}>
        <IconComponent iconname="i-plusIcon5" classname={s.addPetIcon} />
      </span>
    </button>
  );
};

export default AddPetButton;
