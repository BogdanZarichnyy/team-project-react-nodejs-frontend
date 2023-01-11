import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { toast } from "react-toastify";

import { getUserLoggedSelector } from '../../../store/user';

import { ModalContext } from '../../ModalRework';
import AddPetForm from '../../ModalPet/AddPetForm/AddPetForm';
import IconComponent from '../../IconComponent';

import s from './AddNoticeButton.module.scss';

export default function AddNoticeButton() {
  const isLoggedIn = useSelector(getUserLoggedSelector);

  const { handleModal } = useContext(ModalContext);

  const handleClickOpen = (event) => {
    if (isLoggedIn !== 'success') {
      toast.warning(`This service is restricted to authorized users only.Please register or log in.`)
      event.currentTarget.blur()
      return;
    }
    handleModal(<AddPetForm />, s.modalBody);
  };

  return (
    <div className={s.buttonThumb}>
      <p className={s.buttonDescription}>Add pet</p>
      <button
        className={s.addButton}
        onClick={handleClickOpen}
      >
        <IconComponent classname={s.addIcon} iconname="i-plusIcon5"/>
      </button>
    </div>
  );
}
