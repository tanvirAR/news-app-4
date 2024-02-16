import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryChangeHandler = (val) => {
    setSearchQuery(val);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchQueryChangeHandler }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useGetSearchQuery() {
  const { searchQuery, searchQueryChangeHandler } = useContext(SearchContext);
  return {
    searchQuery,
    searchQueryChangeHandler,
  };
}
