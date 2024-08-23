import { useEffect, useState } from "react";
import { Sidebar, Videos } from "../components/ui";
import { fetchFromApi } from "../utils/fetchFromApi";
import { T_Video } from "../types";

const Feed = () => {
  // State variable to store the selected category type
  const [selectedCategory, setSelectedCategory] = useState<string>("New");

  // Mode variable to save videos of the selected category
  const [videos, setVideos] = useState<T_Video[]>([]);

  useEffect(() => {
    // Gets the videos of the selected category and stores it in the state variable
    fetchFromApi(`/search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="flex min-h-screen w-full flex-col items-start gap-x-5 px-3 py-5 md:flex-row">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="w-full space-y-6 py-4">
        <h2 className="text-3xl font-bold text-secondary dark:text-slate-400">
          {selectedCategory} Videos
        </h2>
        <Videos data={videos} />
      </main>
    </div>
  );
};

export default Feed;
