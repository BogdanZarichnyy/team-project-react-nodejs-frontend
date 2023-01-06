import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import { ModalContext } from '../../ModalRework';
import AddPetForm from '../../ModalPet/AddPetForm/AddPetForm';
import { getUserTokenSelector } from '../../../store/user';
import IconComponent from '../../IconComponent';

import s from './AddNoticeButton.module.scss';

export default function AddNoticeButton() {
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
    handleModal(<AddPetForm />, s.modalBody);
  };

  return (
    <div className={s.buttonThumb}>
      <p className={s.buttonDescription}>Add pet</p>
      <button
        className={s.addButton}
        onMouseDown={clickAddPetButton}
        onClick={handleClickOpen}
      >
        <IconComponent classname={s.addIcon} iconname="i-plusIcon5"/>
      </button>
    </div>
  );
}
