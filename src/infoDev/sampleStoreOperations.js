export const sampleUser = {
  email: 'biba@mail.com',
  password: 'biba123',
  name: 'biba',
  phone: '987033223',
  city: 'bibovka',
  photo: '',
  birthday: '2000-04-01T00:00:00.000Z',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlYzAzM2RiMDk3YjdlNGI1OWI0YSIsImlhdCI6MTY3Mjg2NjgxOSwiZXhwIjoxNjcyODY3NzE5fQ.e3_zz2DWcJ35FRkuIkeAMBDTU1345N9732ONhvu6vTQ',
  userId: '63b5ec033db097b7e4b59b4a',
};

export const sampleUser2 = {
  userId: '63b5edb23db097b7e4b59b4e',
  name: 'boba',
  password: 'boba123',
  email: 'boba@mail.com',
  photo: '',
  birthday: '2000-04-01T00:00:00.000Z',
  phone: '987033223',
  city: 'bibovka',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlZGIyM2RiMDk3YjdlNGI1OWI0ZSIsImlhdCI6MTY3Mjg2NzI1MCwiZXhwIjoxNjcyODY4MTUwfQ.ql2x8W_Hf_Pu20I_1Gj2aCZ6KROWhPxgBmHMW1xYnug',
};

//1. Register New User
// To register new user import dependecies and pass dispatch function into button handler:

// import { useDispatch } from 'react-redux';
// import { registerUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch(
//     registerUserFetch({
//       email: 'boba@mail.com',
//       password: 'boba123',
//       name: 'boba',
//       birthday: '2000-04-01',
//       phone: '987033223',
//       city: 'bibovka',
//     })
//   );

//2. Login  User

// import { useDispatch } from 'react-redux';
// import { loginUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch(
//   loginUserFetch({
//     email: 'baba@mail.com',
//     password: 'baba123',
//   })
// );

// 3. Get Current User

// import { useDispatch } from 'react-redux';
// import { getUserFetch } from '../../store/user';

// const dispatch = useDispatch();

// dispatch(getUserFetch())

// 3. Update Current User

// import { useDispatch } from 'react-redux';
// import { updateUserFetch } from '../../store/user';

// const dispatch = useDispatch();

// dispatch( updateUserFetch({
//   name: 'mario',
// }))

// 4. Get News

// import { useDispatch } from 'react-redux';
// import { getNewsFetch } from '../../store/news';

// const dispatch = useDispatch();

//   dispatch(getNewsFetch());

// 5. Get Friends

// import { useDispatch } from 'react-redux';
// import { getFriendsFetch } from '../../store/friends';

// const dispatch = useDispatch();

// dispatch(getFriendsFetch());

// 6. Get inGoodHands pets

// import { useDispatch } from 'react-redux';
// import { getShareAdsFetch } from '../../store/ads';

// const dispatch = useDispatch();

// dispatch(getShareAdsFetch());

// 7. Get Sell pets

// import { useDispatch } from 'react-redux';
// import { getSellAdsFetch } from '../../store/ads';

// const dispatch = useDispatch();

// dispatch(getSellAdsFetch());

// 8. Get Lost/Found pets

// import { useDispatch } from 'react-redux';
// import { getFoundAdsFetch } from '../../store/ads';

// const dispatch = useDispatch();

// dispatch(getFoundAdsFetch());

// 8. Delete Ad

// import { useDispatch } from 'react-redux';
// import { deleteAdsFetch } from '../../store/ads';

// const dispatch = useDispatch();

// dispatch(deleteAdsFetch({_id: 63b768119348e50277b8ed04})); // Передаем id объявления

// 9. Add user pet

// import { useDispatch } from 'react-redux';
// import { addPetFetch } from '../../store/user';

// const dispatch = useDispatch();

// dispatch(addPetFetch({"name": "Dugy", "breed": "Dvornyazhka","comments": "",
//   "birthDate": "2001-11-12T00:00:00.000Z","photo": "",})); // Передаем формдату объявления

// 8. Delete user pet

// import { useDispatch } from 'react-redux';
// import { deletePetFetch } from '../../store/ads';

// const dispatch = useDispatch();

// dispatch(deletePetFetch({_id: 63b768119348e50277b8ed04})); // Передаем id объявления

//===============================================================
// Sale ad response example
// {
//   "owner": {
//     "_id": "63b96e75369f66e5822e988f",
//     "email": "kurtkanavati@gmail.com",
//     "phone": "1110001110"
//   },
//   "passport": "",
//   "_id": "63b768119348e50277b8ed04",
//   "name": "Dugy",
//   "family": "dog",
//   "category": "sale",
//   "breed": "Dvornyazhka",
//   "birthDate": "2001-11-12T00:00:00.000Z",
//   "addTitle": "Sale cute dog",
//   "photo": "",
//   "sex": "male",
//   "comments": "",
//   "location": "Kyiv",
//   "price": null,
//   "follovers": [],
//   "createdAt": "2023-01-06T00:15:13.155Z",
//   "updatedAt": "2023-01-06T00:15:13.155Z"
// },

// Response create new Ad
// ad : {owner: {_id: "63b9916f486849330892af69", email: "boba@mail.com", phone: "+380939393933"},…}
// message : "Created new ad"
// ad object:
// addTitle: "Doggo for sale"
// birthDate: "2022-12-12T00:00:00.000Z"
// breed: "Doggo"
// category: "inGoodHands"
// comments: "Good boy"
// createdAt: "2023-01-09T11:35:16.935Z"
// family: ""
// follovers: []
// location: "Odessa"
// name: "Daggo"
// owner:  {_id: "63b9916f486849330892af69", email: "boba@mail.com", phone: "+380939393933"}
// email: "boba@mail.com"
// phone: "+380939393933"
// _id: "63b9916f486849330892af69"
// passport: ""
// photo: "C:\\fakepath\\Screenshot 2023-01-09 at 00.08.36.png"
// price: null
// sex: "male"
// updatedAt: "2023-01-09T11:35:17.087Z"
// _id: "63bbfbf4e64b75ea428bd2d7"
