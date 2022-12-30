import { Outlet } from 'react-router-dom';

import Header from '../Header';
import ModalContent from '../Modal/ModalContent/ModalContent';
import AddPetModal from '../AddPetModal/AddPetModal';

import style from './SharedLayout.module.scss';


const SharedLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <Header />

      <>
        <ModalContent
          trigger={props => (
            <button type="button" {...props}>
              Add pet
            </button>
          )}
        >
          <AddPetModal></AddPetModal>
        </ModalContent>
      </>

      <div className={style.outlets}>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
