import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../ModalContext';
import IconComponent from '../../IconComponent';

import s from './ModalComponent.module.scss';

const ModalComponent = () => {
  let { modalContent, handleModal, modal, modalStyle, submit } =
    useContext(ModalContext);

  useEffect(() => {
    function handleToggleModalByEsc(evt) {
      let { code } = evt;

      if (code === 'Escape') {
        handleModal();
      }
    }

    if (modal) {
      window.addEventListener('keydown', handleToggleModalByEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleToggleModalByEsc);
    };
  }, [handleModal, modal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      handleModal();
    }
  };

  return modal
    ? createPortal(
        <div className={s.backdrop} onClick={handleBackdropClick}>
          <div className={`${s.modalBody} ${modalStyle}`}>
            <button
              className={s.modalCloseButton}
              onClick={() => handleModal()}
            >
              <IconComponent
                iconname="crossIconCloseModal"
                classname={s.modalCloseIcon}
              />
            </button>
            <div>{modalContent}</div>
            {submit && (
              <button
                className={s.modalConfirmButton}
                onClick={() => handleModal()}
              >
                <IconComponent
                  iconname="checkedIcon"
                  classname={s.modalConfirmIcon}
                />
              </button>
            )}
          </div>
        </div>,
        document.querySelector('#modal')
      )
    : null;
};

export default ModalComponent;
