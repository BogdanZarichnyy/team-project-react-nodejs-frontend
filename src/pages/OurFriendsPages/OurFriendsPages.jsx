import React, { useEffect, useState } from 'react';
import s from './OurFriendsPages.module.scss';

const OurFriends = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(
      'https://test-team-project-react-nodejs-production.up.railway.app/api/ours_friends'
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setFriends(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function getNowDate() {
    return new Date().getDay();
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={s.container}>
        <h2 className={s.tittle}>Our friends</h2>
        <ul className={s.list}>
          {friends.map(
            ({ _id, name, logo, workTime, address, url, email, phone }) => (
              <li key={_id} className={s.item}>
                <h3 className={s.subtittle}>{name}</h3>
                <div className={s.wrapper}>
                  <div className={s.wrapperImage}>
                    <img src={logo} alt="Logo" className={s.image} />
                  </div>
                  <ul className={s.listCard}>
                    <li className={s.itemCard}>
                      <div className={s.dropdown}>
                        <p className={s.dropdownSbt}>Time:</p>
                        <p>
                          {!workTime.length ? (
                            <span>----------------------------------</span>
                          ) : (
                            <span>
                              {workTime[getNowDate() - 1].open} -
                              {workTime[getNowDate() - 1].close}
                            </span>
                          )}
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
                    <li className={s.itemCard}>
                      <p>Address:</p>
                      {!address.length ? (
                        <span>----------------------------------</span>
                      ) : (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener nofollow noreferrer"
                          className={s.link}
                        >
                          {address}
                        </a>
                      )}
                    </li>
                    <li className={s.itemCard}>
                      <p>Email:</p>
                      <a href="mailto:{email}" className={s.link}>
                        {email}
                      </a>
                    </li>
                    <li className={s.itemCard}>
                      <p>Phone:</p>
                      {!phone.length ? (
                        <span>----------------------------------</span>
                      ) : (
                        <a href="tel:{phone}" className={s.link}>
                          {phone}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
};

export default OurFriends;
