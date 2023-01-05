import { useState } from 'react';

const ModalHook = () => {
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState('');
  let [modalStyle, setModalStyle] = useState('');
  let [submit, setsubmit] = useState(false);

  let handleModal = (component = false, style = null, submit = false) => {
    setModal(!modal);
    setsubmit(submit);
    setModalStyle(style);

    if (component) {
      setModalContent(component);
    }
  };

  return { modal, handleModal, modalContent, modalStyle, submit };
};

export default ModalHook;
