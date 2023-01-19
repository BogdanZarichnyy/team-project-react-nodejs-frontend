import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { ModalContext } from '../ModalContext';
import { updateAvatarFetch } from '../../../store/user';

import IconComponent from '../../IconComponent';

import s from './ModalComponent.module.scss';

const ModalComponent = () => {
  let { modalContent, handleModal, modal, modalStyle, submit } =
    useContext(ModalContext);

  const dispatch = useDispatch();

  useEffect(() => {
    function handleToggleModalByEsc(evt) {
      let { code } = evt;

      if (code === 'Escape') {
        handleModal();
      }
    }

    if (modal) {
      window.addEventListener('keydown', handleToggleModalByEsc);
      document.body.classList.add('NotScroll');
    }
    return () => {
      window.removeEventListener('keydown', handleToggleModalByEsc);
      document.body.classList.remove('NotScroll');
    };
  }, [handleModal, modal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      handleModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateAvatarFetch(submit));
    handleModal();
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
              <button className={s.modalConfirmButton} onClick={handleSubmit}>
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
