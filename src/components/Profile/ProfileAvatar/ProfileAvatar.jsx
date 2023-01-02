import { useState, useContext } from 'react';
import Avatar from 'react-avatar-edit';

import ProfileAvatarAddButton from '../ProfileAvatarAddButton';
import ProfileAvatarChangeButton from '../ProfileAvatarChangeButton';
import { ModalContext } from '../../ModalRework';

import s from './ProfileAvatar.module.scss';

const ProfileAvatar = () => {
  const [img, setImg] = useState(null); // props.personalInfo.profileImg.length ? props.personalInfo.profileImg : ''

  const { handleModal } = useContext(ModalContext);

  const handleClickOpen = () => {
    handleModal(
      <Avatar
        width={280}
        height={280}
        imageHeight={253}
        minCropRadius={50}
        exportQuality={1.0}
        onCrop={onCrop}
        onClose={onClose}
        label={'Click or Drag image here!'}
        onBeforeFileLoad={onBeforeFileLoad}
        className={s.avatarField}
      />
    );
  };

  const onClose = () => {
    setImg(null);
  };

  const onCrop = imgPreview => {
    setImg(imgPreview);
  };

  const onBeforeFileLoad = elem => {
    if (elem.target.files[0].size > 1000000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  return (
    <div className={s.avatarContainer}>
      {img ? (
        <img src={img} alt="ImageAvatar" className={s.avatarImage} />
      ) : (
        <ProfileAvatarAddButton {...{ handleClickOpen }} />
      )}
      {img && <ProfileAvatarChangeButton {...{ handleClickOpen }} />}
    </div>
  );
};

export default ProfileAvatar;
