export { getNewsFetch, getNewsSuccess, getNewsFailure } from './newsSlice';

export { newsSagas } from './newsSaga';

export {
  getNewsSelector,
  getLoadingdNewsSelector,
  getErrorNewsSelector,
  sortedNewsSelector,
} from './newsSelectors';
