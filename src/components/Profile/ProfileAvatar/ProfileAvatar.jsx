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
  const formData = new FormData();

  // TODO Удалить, если юзстейт работает корректно.
  useEffect(() => {
    photo ?? setImg(photo);
  }, [photo]);

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
      />,
      s.modalBody,
      formData
    );
  };

  const onClose = () => {
    setImg(null);
  };

  const onCrop = imgPreview => {
    setImg(imgPreview);

    urltoFile(imgPreview, 'avatar').then(data => {
      formData.delete('avatar');
      formData.append('avatar', data, 'avatar');
    });
  };

  const onBeforeFileLoad = elem => {
    if (elem.target.files[0].size > 1000000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  async function urltoFile(url, filename, mimeType) {
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return new File([buf], filename, { type: mimeType });
  }

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
