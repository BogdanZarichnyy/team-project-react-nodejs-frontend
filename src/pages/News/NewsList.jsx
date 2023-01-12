import { useSelector } from 'react-redux';
import {
  getNewsSelector,
  getLoadingdNewsSelector,
  getErrorNewsSelector,
} from '../../store/news';
import s from './NewsList.module.scss';
import SearchInput from '../../components/SearchInput';

const NewsList = () => {
  const newsArr = useSelector(getNewsSelector);
  const newsIsLoading = useSelector(getLoadingdNewsSelector);
  const newsError = useSelector(getErrorNewsSelector);

  return (
    <div className={s.container}>
      <h2 className={s.title}>News</h2>
      <SearchInput />
      {newsError ? <div>Error: {newsError}</div> : null}
      {newsIsLoading ? <div className={s.loading}>Loading...</div> : null}
      <ul className={s.articlelist}>
        {newsArr.length
          ? newsArr.map(({ _id, title, url, info, date }) => (
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
            ))
          : null}
        {!newsArr.length && !newsError && !newsIsLoading ? (
          <li>Ooops... Nothing was found</li>
        ) : null}
      </ul>
    </div>
  );
};

export default NewsList;
