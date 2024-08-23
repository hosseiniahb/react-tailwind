import { Link } from "react-router-dom";
import { logo } from "../../../utils/constants";
import { Search } from "../../ui";
import DisplayMode from "../../ui/DisplayMode";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-white px-3 shadow sm:px-8 dark:bg-dark">
      <Link to="/" className="flex w-auto items-center gap-1">
        <img src={logo} />
        <h1 className="font-bold text-slate-700 dark:text-slate-300">
          YouTube
        </h1>
      </Link>
      <Search />
      <DisplayMode />
    </header>
  );
};

export default Navbar;
