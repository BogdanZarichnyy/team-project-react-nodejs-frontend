import styles from './NewsList.module.scss';
import newsArticle from '../../news.json';
import SearchInput from '../../components/SearchInput';

const NewsList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>News</h2>
      <SearchInput />
      <ul className={styles.articlelist}>
        {newsArticle.map(({ _id, title, url, info, date }) => (
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
};

export default NewsList;
