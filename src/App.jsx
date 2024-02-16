import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import { CategoryProvider } from "./contexts/CategoryContexts";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <CategoryProvider>
        <div>
          <Navbar />
          <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8 ">
              <NewsList />
            </div>
          </main>
          <Footer />
        </div>
      </CategoryProvider>
    </SearchProvider>
  );
}

export default App;
