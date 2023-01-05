import { useContext, useState } from 'react';

import { ModalContext } from '../../ModalRework';
import AddPetForm from '../../ModalPet/AddPetForm/AddPetForm';

import sprite from '../../../images/sprite.svg';

import s from './AddNoticeButton.module.scss';

export default function AddNoticeButton() {
  const [isLogedIn, setisLoggedIn] = useState(true);

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
    handleModal(<AddPetForm />);
  };

  return (
    <div className={s.buttonThumb}>
      <p className={s.buttonDescription}>Add pet</p>
      <button
        className={s.addButton}
        onMouseDown={clickAddPetButton}
        onClick={handleClickOpen}
      >
        <svg className={s.addIcon}>
          <use id="i-plusIcon5" href={`${sprite}#i-plusIcon5`}></use>
        </svg>
      </button>
    </div>
  );
}
