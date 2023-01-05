import { createContext } from 'react';
import useModal from '../ModalHook';
import ModalComponent from '../ModalComponent';

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children, styles }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <ModalComponent styles={styles} />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
