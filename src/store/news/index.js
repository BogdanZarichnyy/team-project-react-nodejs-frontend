export {
  getNewsFetch,
  getNewsSuccess,
  getNewsFailure,
  logOutNewsSuccess,
} from './newsSlice';

export { newsSagas } from './newsSaga';

export {
  getNewsSelector,
  getLoadingdNewsSelector,
  getErrorNewsSelector,
  sortedNewsSelector,
} from './newsSelectors';
