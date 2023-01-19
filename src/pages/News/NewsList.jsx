import { useSelector } from 'react-redux';
import {
  getLoadingdNewsSelector,
  getErrorNewsSelector,
  sortedNewsSelector,
} from '../../store/news';

import Loader from '../../components/LoaderV1';
import SearchInput from '../../components/SearchInput';

import s from './NewsList.module.scss';

const NewsList = () => {
  const sortedNewsArr = useSelector(sortedNewsSelector);
  const newsIsLoading = useSelector(getLoadingdNewsSelector);
  const newsError = useSelector(getErrorNewsSelector);

  return (
    <div className={s.container}>
      <h2 className={s.title}>News</h2>

      <SearchInput />

      {newsError ? <div>Error: {newsError}</div> : null}
      <ul className={s.articlelist}>
        {sortedNewsArr.length
          ? sortedNewsArr.map(({ _id, title, url, info, date, dateISO }) => (
              <li className={s.articleItem} key={_id}>
                <span className={s.gradient}></span>
                <h3 className={s.articleTitle}>{title}</h3>
                <p className={s.articleDescription}>{info}</p>
                <p className={s.articleMeta}>
                  <span className={s.metaDate}>
                    {new Date(dateISO).toLocaleString().split(',').shift()}
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
        {!sortedNewsArr.length && !newsError && !newsIsLoading ? (
          <li>Ooops... Nothing was found</li>
        ) : null}
      </ul>
      {newsIsLoading ? <Loader /> : null}
    </div>
  );
};

export default NewsList;
