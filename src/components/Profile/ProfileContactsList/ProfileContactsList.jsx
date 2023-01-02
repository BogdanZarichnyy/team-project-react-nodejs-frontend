import { useState } from 'react';
import ProfileContactsItem from '../ProfileContactsItem';
import ProfileLogOutButton from '../ProfileLogOutButton';

import s from './ProfileContactsList.module.scss';

const contactTypes = [
  { name: 'Name:', type: 'text' },
  { name: 'Email:', type: 'email' },
  { name: 'Birthday:', type: 'date' },
  { name: 'Phone:', type: 'tel' },
  { name: 'City:', type: 'text' },
];

const ProfileContactsList = () => {
  const [activeContact, setActiveContact] = useState(null);
  console.log(activeContact);

  return (
    <div className={s.contactThumb}>
      <ul className={s.contactList}>
        {contactTypes &&
          contactTypes.map(({ name, type }) => (
            <ProfileContactsItem
              key={name}
              {...{ name, type, activeContact, setActiveContact }}
            />
          ))}
      </ul>
      <ProfileLogOutButton />
    </div>
  );
};

export default ProfileContactsList;
