import s from './NewsList.module.scss';
import SearchInput from '../../components/SearchInput';
import { useEffect, useState } from 'react';

const NewsList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      'https://test-team-project-react-nodejs-production.up.railway.app/api/news'
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setNews(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className={s.loading}>Loading...</div>;
  } else {
    return (
      <div className={s.container}>
        <h2 className={s.title}>News</h2>
        <SearchInput />
        <ul className={s.articlelist}>
          {news.map(({ _id, title, url, info, date }) => (
            <li className={s.articleItem} key={_id}>
              <span className={s.gradient}></span>
              <h3 className={s.articleTitle}>{title}</h3>
              <p className={s.articleDescription}>{info}</p>
              <p className={s.articleMeta}>
                <span className={s.metaDate}>
                  {date?.split('T').shift().split('-').join('/')}
                </span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className={s.metaLink}
                >
                  Read more...
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default NewsList;
