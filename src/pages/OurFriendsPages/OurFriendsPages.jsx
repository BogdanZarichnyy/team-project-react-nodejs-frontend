import React from 'react';
import s from './OurFriendsPages.module.scss';
import data from '../../oursFriends.json';
import logo from '../../images/about.png';
const OurFriends = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(data)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setIsLoaded(true);
  //         setData(result);
  //       },
  //       error => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  function getNowDate() {
    return new Date().getDay();
  }

  return (
    <div className={s.container}>
      <h2 className={s.tittle}>Our friends</h2>
      <ul className={s.list}>
        {data.map(({ _id, name, workTime, address, url, email, phone }) => (
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
        ))}
      </ul>
    </div>
  );
};

export default OurFriends;
