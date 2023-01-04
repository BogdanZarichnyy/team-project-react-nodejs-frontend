import { useState } from 'react';

import sprite from '../../../images/sprite.svg';
import AddPetModal from '../../AddPetModal';
import ModalContent from '../../Modal/ModalContent/ModalContent';

import s from './AddNoticeButton.module.scss';

export default function AddNoticeButton() {
  const [isLogedIn, setisLoggedIn] = useState(true);

  const clickAddPetButton = event => {
    if (!isLogedIn) {
      alert('Please log in!');
      event.preventDefault();
      return;
    }

    event.preventDefault();
  };

  return (
    <div className={s.buttonThumb}>
      <p className={s.buttonDescription}>Add pet</p>
      <ModalContent
        trigger={props => (
          <button
            className={s.addButton}
            onMouseDown={clickAddPetButton}
            {...props}
          >
            <svg className={s.addIcon}>
              <use id="i-plusIcon5" href={`${sprite}#i-plusIcon5`}></use>
            </svg>
          </button>
        )}
      >
        <AddPetModal />
      </ModalContent>
    </div>
  );
}
