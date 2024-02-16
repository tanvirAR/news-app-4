import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("general");

  const toggleCategory = (cate) => {
    setCategory(cate);
  };

  return (
    <CategoryContext.Provider value={{ category, toggleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useGetCategory() {
  const { category, toggleCategory } = useContext(CategoryContext);
  return {
    category,
    toggleCategory,
  };
}
