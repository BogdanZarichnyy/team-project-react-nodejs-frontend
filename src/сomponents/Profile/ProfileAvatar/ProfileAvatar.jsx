import { useState, useContext } from 'react';
import Avatar from 'react-avatar-edit';

import ProfileAvatarAddButton from '../ProfileAvatarAddButton';
import ProfileAvatarChangeButton from '../ProfileAvatarChangeButton';
import { ModalContext } from '../../ModalRework';

import s from './ProfileAvatar.module.scss';

const ProfileAvatar = () => {
  const [img, setImg] = useState(null); // props.personalInfo.profileImg.length ? props.personalInfo.profileImg : ''

  const { modal, handleModal } = useContext(ModalContext);

  console.log(handleModal);

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

//https://codesandbox.io/s/resume-builder-y7sfs5?file=/src/Components/PersonalInfoComponent.js:2932-2945
//https://github.com/kirill3333/react-avatar

// const [img, setImg] = useState(
//   props.personalInfo.profileImg.length ? props.personalInfo.profileImg : ""
// );
// const [sotreImage, setSotreImage] = useState([]);

// const [open, setOpen] = useState(false);

// const handleClickOpen = () => {
//   setOpen(true);
// };
// const handleClose = () => {
//   setOpen(false);
// };

// const onCrop = (view) => {
//   setImg(view);
// };

// const onClose = (view) => {
//   setImg(null);
// };

// const saveImage = () => {
//   setSotreImage([{ img }]);
//   setOpen(false);
// };

// <Avatar
//   sx={{ width: 120, height: 120, marginBottom: 1 }}
//   alt="profile img"
//   src={img.length ? img : `https://img.icons8.com/color/344/test-account.png`}
// />;

// <div>
//   <Button
//     className="change-profile-photo-btn"
//     variant="outlined"
//     onClick={handleClickOpen}>
//     Change Profile Photo
//   </Button>
//   <BootstrapDialog
//     onClose={handleClose}
//     aria-labelledby="customized-dialog-title"
//     open={open}>
//     <BootstrapDialogTitle
//       id="customized-dialog-title"
//       onClose={handleClose}>
//       Update Image
//     </BootstrapDialogTitle>
//     <DialogContent>
//       <Avatar1
//         width={windowSize.innerWidth > 900 && 400}
//         height={windowSize.innerWidth > 500 ? 400 : 150}
//         onCrop={onCrop}
//         onClose={onClose}
//       />
//     </DialogContent>
//     <DialogActions>
//       <Button autoFocus variant="contained" onClick={saveImage}>
//         Save
//       </Button>
//     </DialogActions>
//   </BootstrapDialog>
// </div>
