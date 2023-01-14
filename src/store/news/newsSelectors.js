export const getNewsSelector = state => state.news.newsData;
export const getLoadingdNewsSelector = state => state.news.isLoading;
export const getErrorNewsSelector = state => state.news.error;

// getNewsSelector;

export const sortedNewsSelector = state => {
  const news = getNewsSelector(state);
  const sortedNews = [...scores].sort((a, b) => b - a);
  console.log(sortedNews); // [92, 74, 61, 56, 35, 19]

  return sortedNews;
};
