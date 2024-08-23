import { Link } from "react-router-dom";
import { sidebarLinks } from "../../utils/constants";
import Button from "./Button";
import { T_SidebarLink } from "../../types";
import { FC } from "react";

type T_SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const Sidebar: FC<T_SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <aside className="sticky top-16 mb-10 flex w-full gap-3 overflow-x-auto border-r bg-white px-4 py-4 md:top-20 md:mb-0 md:h-auto md:min-w-64 md:max-w-64 md:flex-col md:items-center md:border-r-0 dark:rounded-xl dark:border-slate-400 dark:bg-[#232325]">
      {sidebarLinks.map((link: T_SidebarLink, index: number) => {
        const Icon = link.icon;
        return (
          <Link key={index} to={"/"}>
            <Button
              onClick={() => setSelectedCategory(link.label)}
              variant="transparent"
              className={`flex items-center gap-2 transition-all hover:bg-primary hover:text-white hover:opacity-100 md:w-56 md:max-w-52 dark:text-[#94A3B8] ${link.label === selectedCategory && "!bg-primary text-white dark:border-none dark:text-slate-50"}`}
            >
              <Icon />
              <span className="truncate">{link.label}</span>
            </Button>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
