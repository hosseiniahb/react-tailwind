import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { T_Video } from "../types";
import { Videos } from "../components/ui";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  // Mode variable to save searched videos
  const [searchedVideos, setSearchVideos] = useState<T_Video[]>([]);

  // Get the searched value from the URL
  const { searchTerm } = useParams();

  useEffect(() => {
    // Gets videos based on user search and stores it in state variable
    fetchFromApi(`/search?part=snippet&q=${searchTerm}`).then((data) => {
      setSearchVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <main className="w-full space-y-6 p-5 sm:container sm:mx-auto">
      <h2 className="text-3xl font-bold text-secondary">
        Search result : <span className="text-primary">{searchTerm}</span>{" "}
        Videos
      </h2>
      <Videos data={searchedVideos} />
    </main>
  );
};

export default SearchFeed;
