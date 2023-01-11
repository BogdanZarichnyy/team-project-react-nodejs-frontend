import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProfilePet from '../../components/Profile/ProfilePet';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileContactsList from '../../components/Profile/ProfileContactsList';
import AddPetButton from '../../components/AddPetButton';
import { getPetsFetch, getPetsSelector } from '../../store/user';

import s from './Profile.module.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const petsArr = useSelector(getPetsSelector);
  const firstLoad = useSelector(state => state.user.firstLoad);

  // Постоянный ререндер, несмотря на массив зависимостей!
  // useEffect(() => {
  //   if (firstLoad) {
  //     dispatch(getPetsFetch());
  //   }
  // }, [dispatch, firstLoad]);

  useEffect(() => {
    dispatch(getPetsFetch());
  }, []);

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
          <AddPetButton />
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
