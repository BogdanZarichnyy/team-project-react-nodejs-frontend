import { Outlet } from 'react-router-dom';

import Header from '../Header';
import ModalContent from '../Modal/ModalContent/ModalContent';
import AddPetModal from '../AddPetModal';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>

      <div className={style.outlets}>
        {/* <>
          <ModalContent
            trigger={props => (
              <button style={{ position: 'absolute' }} type="button" {...props}>
                Add pet
              </button>
            )}
          >
            <AddPetModal></AddPetModal>
          </ModalContent>
        </> */}
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
