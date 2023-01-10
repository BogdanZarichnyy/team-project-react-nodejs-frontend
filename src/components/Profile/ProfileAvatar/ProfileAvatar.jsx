import { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Avatar from 'react-avatar-edit';

import ProfileAvatarAddButton from '../ProfileAvatarAddButton';
import ProfileAvatarChangeButton from '../ProfileAvatarChangeButton';
import { ModalContext } from '../../ModalRework';
import { getUserAvatarSelector } from '../../../store/user';

import s from './ProfileAvatar.module.scss';

const ProfileAvatar = () => {
  const photo = useSelector(getUserAvatarSelector);
  const [img, setImg] = useState(photo ? photo : null); //TODO проверить работоспособность
  const { handleModal } = useContext(ModalContext);
  console.log('img', img);
  console.log('img', typeof img);
  // TODO Удалить, если юзстейт работает корректно.
  // useEffect(() => {
  //   photo ?? setImg(photo);
  // }, [photo]);

  const handleClickOpen = () => {
    handleModal(
      <Avatar
        width={280}
        height={280}
        imageHeight={253}
        minCropRadius={50}
        exportQuality={1.0}
        onCrop={onCrop}
        onFileLoad={onFileLoad}
        onClose={onClose}
        label={'Click or Drag image here!'}
        onBeforeFileLoad={onBeforeFileLoad}
        className={s.avatarField}
      />,
      s.modalBody,
      true //TODO этот компонент заменить на хэндлер отправки картинки на сервер, передам ему img и прокинуть его в кнопку
    );
  };

  const onClose = () => {
    setImg(null);
  };

  const onCrop = imgPreview => {
    setImg(imgPreview);
  };

  const onFileLoad = file => {
    console.log('file', file);
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
