import styles from './NewsList.module.scss';
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
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>News</h2>
        <SearchInput />
        <ul className={styles.articlelist}>
          {news.map(({ _id, title, url, info, date }) => (
            <li className={styles.articleItem} key={_id}>
              <span className={styles.gradient}></span>
              <h3 className={styles.articleTitle}>{title}</h3>
              <p className={styles.articleDescription}>{info}</p>
              <p className={styles.articleMeta}>
                <span className={styles.metaDate}>
                  {date?.split('T').shift().split('-').join('/')}
                </span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className={styles.metaLink}
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
