import divideNews from "../utils/divideNewsIntoSections";
import NewsSectionLeft from "./NewsSectionLeft";
import NewsSectionRight from "./NewsSectionRight";
import SingleNewsRight from "./singleNews/SingleNewsRight";
import SingleNewsLeft from "./singleNews/SingleNewsLeft";
import { generateUniqueKey } from "../utils/generateUniqueKey";
import { useGetSearchQuery } from "../contexts/SearchContext";
import useNewsSearchQuery from "../hooks/useNewsSearchQuery";

export default function SearchedNewsList() {
  const { searchQuery } = useGetSearchQuery();
  const { news, isLoading, isError } = useNewsSearchQuery({
    searchValue: searchQuery,
  });

  let contents;
  let leftSectionNews;
  let rightSectionNews;

  if (isLoading) {
    contents = <h2>Loading...</h2>;
  }

  if (isError) {
    contents = <h1>Failed to load news. Please try again later.</h1>;
  }


  if (news && !isError && !isLoading) {
    const [left, right] = divideNews(news?.result);

    if (left.length > 0) {
      leftSectionNews = left.map((singleNews) => {
        const key = generateUniqueKey(singleNews?.title);
        return <SingleNewsLeft key={key} data={singleNews} />;
      });
    }

    if (right.length > 0) {
      rightSectionNews = right.map((singleNews) => {
        const key = generateUniqueKey(singleNews?.title);
        return <SingleNewsRight data={singleNews} key={key} />;
      });
    }

    contents = (
      <>
        <NewsSectionLeft>{leftSectionNews}</NewsSectionLeft>
        <NewsSectionRight>{rightSectionNews}</NewsSectionRight>
      </>
    );
  }

    if (news && news?.result.length == 0) {
      contents = <h2>No News Found!</h2>;
    }


  return contents;
}
