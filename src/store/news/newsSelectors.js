export const getNewsSelector = state => state.news.newsData;
export const getLoadingdNewsSelector = state => state.news.isLoading;
export const getErrorNewsSelector = state => state.news.error;

export const sortedNewsSelector = state => {
  const news = getNewsSelector(state);
  const sortedNews = [...news].sort((a, b) => (a.dateISO > b.dateISO ? -1 : 1));
  return sortedNews;
};
