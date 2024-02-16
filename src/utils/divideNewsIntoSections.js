function divideNews(news) {
  const length = news.length;

  // Calculate the number of elements for each new array
  const twoThirdsLength = Math.floor((length * 2) / 3);

  // Use slice() to divide the array
  const firstArray = news.slice(0, twoThirdsLength);
  const secondArray = news.slice(twoThirdsLength);

  return [firstArray, secondArray];
}

export default divideNews;
