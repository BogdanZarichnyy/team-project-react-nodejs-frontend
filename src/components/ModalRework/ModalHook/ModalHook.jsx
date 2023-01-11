import { useState } from 'react';

const ModalHook = () => {
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState('');
  let [modalStyle, setModalStyle] = useState('');
  let [submit, setSubmit] = useState(null);

  let handleModal = (component = false, style = null, submit = null) => {
    setModal(!modal);
    setSubmit(submit);
    setModalStyle(style);

    if (component) {
      setModalContent(component);
    }
  };

  return { modal, handleModal, modalContent, modalStyle, submit };
};

export default ModalHook;
