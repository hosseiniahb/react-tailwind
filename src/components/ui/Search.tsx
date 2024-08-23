import { ChangeEvent, MouseEvent, useState } from "react";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const Search = () => {
  // Store variable to store the current search term entered by user
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Store variable to control whether the input is visible or not
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false);

  // Function to redirect to a specific path
  const navigate = useNavigate();

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // If the search term is not empty, navigate to the search results page
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className="flex w-full items-center justify-end pr-2 sm:justify-center md:w-10/12"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search..."
          className="hidden min-w-60 rounded-xl border-2 px-4 py-2 outline-none transition-all focus:ring-2 focus:ring-red-500 sm:block sm:w-96 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        />
        <Button
          variant="transparent"
          onClick={() => setShowInputSearch(true)}
          className="sm:hidden dark:border dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <IoSearch />
        </Button>
      </form>

      {showInputSearch && (
        <form
          onSubmit={(event) => event.preventDefault()}
        className="fixed left-0 top-0 flex h-screen w-full flex-col gap-2 bg-slate-100/80 p-5 backdrop-blur-sm dark:bg-slate-700/80">
          <Button
            variant="dark"
            className="self-end p-2"
            onClick={() => {
              setShowInputSearch(false);
            }}
          >
            <CgClose />
          </Button>
          <div
            onClick={(event: MouseEvent<HTMLDivElement>) =>
              event.stopPropagation()
            }
            className="mx-auto flex w-full max-w-xl flex-col space-y-5 rounded-xl bg-white p-5 dark:bg-slate-900"
          >
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border p-3 outline-none transition-all focus:ring-2 focus:ring-red-500 dark:border-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                value={searchTerm}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(event.target.value)
                }
              />

              <Button
                variant="primary"
                onClick={() => {
                  if (searchTerm) {
                    navigate(`/search/${searchTerm}`);
                    setShowInputSearch(false);
                  }
                }}
              >
                <IoSearch />
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Search;
