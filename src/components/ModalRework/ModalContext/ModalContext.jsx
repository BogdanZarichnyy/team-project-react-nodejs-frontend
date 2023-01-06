import { createContext } from 'react';
import useModal from '../ModalHook';
import ModalComponent from '../ModalComponent';

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent, submit, modalStyle } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent, modalStyle, submit }}>
      <ModalComponent />

      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
