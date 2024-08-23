import { FC } from "react";
import { T_Video } from "../../types";
import Videos from "./Videos";

type T_RelatedVideosProps = {
  relatedVideos: T_Video[];
};

const RelatedVideos: FC<T_RelatedVideosProps> = ({ relatedVideos }) => {
  return (
    <div className="mt-10 w-full pb-10 lg:mt-0 lg:w-3/12 lg:pl-5">
      <h2 className="mb-5 text-3xl font-bold text-secondary dark:text-slate-400">
        Related Videos
      </h2>
      <div className="w-full overflow-x-auto">
        <Videos data={relatedVideos} className="flex-nowrap lg:flex-wrap" />
      </div>
    </div>
  );
};

export default RelatedVideos;
