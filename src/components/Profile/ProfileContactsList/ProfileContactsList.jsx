import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../../store/user';
import ProfileContactsItem from '../ProfileContactsItem';
import ProfileLogOutButton from '../ProfileLogOutButton';

import s from './ProfileContactsList.module.scss';

const ProfileContactsList = () => {
  const [activeContact, setActiveContact] = useState(null);
  const { name, email, phone, birthday, city } = useSelector(getUserSelector);

  const contactTypes = [
    { name: 'Name:', type: 'text', value: name, valKey: 'name' },
    { name: 'Email:', type: 'email', value: email, valKey: 'email' },
    { name: 'Birthday:', type: 'date', value: birthday, valKey: 'birthday' },
    { name: 'Phone:', type: 'tel', value: phone, valKey: 'phone' },
    { name: 'City:', type: 'text', value: city, valKey: 'city' },
  ];

  return (
    <div className={s.contactThumb}>
      <ul className={s.contactList}>
        {contactTypes &&
          contactTypes.map(({ name, type, value, valKey }) => (
            <ProfileContactsItem
              key={valKey}
              {...{
                name,
                type,
                value,
                valKey,
                activeContact,
                setActiveContact,
              }}
            />
          ))}
      </ul>
      <ProfileLogOutButton />
    </div>
  );
};

export default ProfileContactsList;
