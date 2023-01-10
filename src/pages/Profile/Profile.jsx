import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSellAdsFetch,
  getFoundAdsFetch,
  getShareAdsFetch,
  deleteAdsFetch,
} from '../../store/ads/';

import ProfilePet from '../../components/Profile/ProfilePet';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileContactsList from '../../components/Profile/ProfileContactsList';
import AddPetButton from '../../components/AddPetButton';
import { getPetsFetch, getPetsSelector } from '../../store/user';

import s from './Profile.module.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const petsArr = useSelector(getPetsSelector);

  // Постоянный ререндер, несмотря на массив зависимостей!
  // useEffect(() => {
  //   dispatch(getPetsFetch());
  // }, []);
  useEffect(() => {
    if (!petsArr) {
      dispatch(getPetsFetch());
    }
  }, [dispatch, petsArr]);

  const handleAddPet = async () => {
    dispatch(getShareAdsFetch());
  };

  return (
    <section className={`container ${s.containerDesktop}`}>
      <section className={s.profileContainer}>
        <h2 className={`${s.profileHeader} ${s.profileHeaderMod}`}>
          My information:
        </h2>
        <div className={s.profileThumb}>
          <ProfileAvatar />
          <ProfileContactsList />
        </div>
      </section>
      <section className={s.profileContainer}>
        <div className={s.petsHeaderThumb}>
          <h2 className={s.profileHeader}>My pets:</h2>
          <AddPetButton handleClick={handleAddPet} />
        </div>
        <div className={s.petsThumb}>
          <ul>
            {petsArr &&
              petsArr.length > 0 &&
              petsArr.map(pet => <ProfilePet key={pet._id} {...{ pet }} />)}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Profile;

//sample data here
// const petsArr = [
//   {
//     _id: 1,
//     photo: 'https://picsum.photos/300',
//     name: 'Jack',
//     date: '22.04.2018',
//     breed: 'Persian cat',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//   },
//   {
//     _id: 2,
//     photo: 'https://picsum.photos/300',
//     name: 'Black',
//     date: '26.02.2017',
//     breed: 'Basenji',
//     comments:
//       'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
//   },
// ];
