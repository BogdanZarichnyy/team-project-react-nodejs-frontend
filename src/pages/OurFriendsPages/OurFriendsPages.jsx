import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriendsSelector, getFriendsFetch } from '../../store/friends';

import s from './OurFriendsPages.module.scss';

const OurFriends = () => {
  const friendsArr = useSelector(getFriendsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriendsFetch());
  }, [dispatch]);

  function getNowDate() {
    return new Date().getDay();
  }

  return (
    <div className={s.container}>
      <h2 className={s.tittle}>Our friends</h2>
      <ul className={s.list}>
        {friendsArr.map(
          ({
            _id,
            name,
            link,
            logo,
            workTime,
            address,
            url,
            email,
            phone,
            phoneNumber,
          }) => (
            <li key={_id} className={s.item}>
              <h3 className={s.subtittle}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  {name}
                </a>
              </h3>
              <div className={s.wrapper}>
                <div className={s.wrapperImage}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    <img src={logo} alt="Logo" className={s.image} />
                  </a>
                </div>
                <ul className={s.listCard}>
                  {!workTime.length ? (
                    <li>
                      <p>Time:</p>
                      <span>----------------------------------</span>
                    </li>
                  ) : (
                    <li className={s.itemCard}>
                      <div className={s.dropdown}>
                        <p className={s.dropdownSbt}>Time:</p>
                        <p>
                          <span>
                            {workTime[getNowDate()].open} -
                            {workTime[getNowDate()].close}
                          </span>
                        </p>
                        {!!workTime.length && (
                          <ul className={s.dropdownContent}>
                            {workTime.map(({ day, open, close }) => (
                              <li className={s.dropdownItem} key={day}>
                                <span>{day}</span>
                                <span>
                                  {open}-{close}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  )}

                  {!address.length ? (
                    <li>
                      <p>Address:</p>
                      <span>----------------------------------</span>
                    </li>
                  ) : (
                    <li className={s.itemCard}>
                      <p>Address:</p>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        className={s.link}
                      >
                        {address}
                      </a>
                    </li>
                  )}
                  <li className={s.itemCard}>
                    <p>Email:</p>
                    <a
                      href={email ? 'mailto:' + email : null}
                      className={s.link}
                    >
                      {email}
                    </a>
                  </li>
                  {!phone.length ? (
                    <li>
                      <p>Phone: </p>
                      <span>----------------------------------</span>
                    </li>
                  ) : (
                    <li className={s.itemCard}>
                      <p>Phone:</p>
                      <a
                        href={phoneNumber ? 'tel:' + phoneNumber : null}
                        className={s.link}
                      >
                        {phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default OurFriends;
