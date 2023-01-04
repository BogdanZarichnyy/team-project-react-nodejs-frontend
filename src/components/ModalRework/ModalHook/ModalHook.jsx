import { useState } from 'react';

const ModalHook = () => {
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState('');

  let handleModal = (content = false) => {
    setModal(!modal);

    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

export default ModalHook;
