import Logo from "../assets/logo.png";
import SearchBox from "./SearchBox";
import NavLogo from "./icons/NavLogo";
import { useGetCategory } from "../contexts/CategoryContexts";

export default function Navbar() {
  const { toggleCategory } = useGetCategory();

  function toggleCategoryHandler(cate) {
    toggleCategory(cate);
  }

  const links = pages.map((link) => (
    <li key={link}>
      <a href="#" onClick={() => toggleCategoryHandler(link.toLowerCase())}>
        {link}
      </a>
    </li>
  ));

  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <NavLogo />
          <span>Thursday, February 25, 2021</span>
        </div>
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={Logo}
            alt="Lws"
          />
        </a>
        <SearchBox />
      </div>
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {links}
        </ul>
      </div>
    </nav>
  );
}

const pages = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
