import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../ModalContext';
import classNames from 'classnames';
import sprite from '../../../images/sprite.svg';

import s from './ModalComponent.module.scss';

const ModalComponent = ({ styles }) => {
  let { modalContent, handleModal, modal } = useContext(ModalContext);

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
          <div className={classNames(s.modalBody, styles)}>
            <button
              className={s.modalCloseButton}
              onClick={() => handleModal()}
            >
              <svg className={s.modalCloseIcon}>
                <use
                  id="crossIconCloseModal"
                  href={`${sprite}#crossIconCloseModal`}
                />
              </svg>
            </button>
            <div>{modalContent}</div>
            <button
              className={s.modalConfirmButton}
              onClick={() => handleModal()}
            >
              <svg className={s.modalConfirmIcon}>
                <use id="checkedIcon" href={`${sprite}#checkedIcon`} />
              </svg>
            </button>
          </div>
        </div>,
        document.querySelector('#modal')
      )
    : null;
};

export default ModalComponent;
