import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  getSellAdsFetch,
  getFoundAdsFetch,
  getShareAdsFetch,
  addNewAdsFetch,
} from '../../store/ads/';

import { getFriendsFetch } from '../../store/friends';

import ProfilePet from '../../components/Profile/ProfilePet';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileContactsList from '../../components/Profile/ProfileContactsList';
import AddPetButton from '../../components/AddPetButton';

import s from './Profile.module.scss';
import axios from 'axios';

const Profile = () => {
  const dispatch = useDispatch();

  const handleAddPet = async () => {
    dispatch(getFoundAdsFetch());
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
              petsArr.map(pet => <ProfilePet key={pet._id} {...{ pet }} />)}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Profile;

//sample data here
const petsArr = [
  {
    _id: 1,
    photo: 'https://picsum.photos/300',
    name: 'Jack',
    date: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
  {
    _id: 2,
    photo: 'https://picsum.photos/300',
    name: 'Black',
    date: '26.02.2017',
    breed: 'Basenji',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
];
