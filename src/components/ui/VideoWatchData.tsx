import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { T_Snippet_Video, T_VideoStatistics } from "../../types";
import { FC } from "react";

type T_VideoWatchData = {
  snippet: T_Snippet_Video;
  statistics: T_VideoStatistics;
};

const VideoWatchData: FC<T_VideoWatchData> = ({ snippet, statistics }) => {
  return (
    <div className="flex w-full flex-col px-2">
      <div className="flex w-full flex-col items-start">
        <h3 className="text-lg font-semibold dark:text-slate-100">
          {snippet.title}
        </h3>
        <Link to={`/channel/${snippet.channelId}`}>
          <div className="flex items-center justify-center gap-2 py-3">
            <h6 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {snippet?.channelTitle}
            </h6>
            <FaCheckCircle className="text-blue-500" />
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center justify-end gap-5">
        <p className="px-2 font-bold dark:text-slate-400">
          View Count :{" "}
          <span className="text-secondary dark:text-slate-300">
            {parseInt(statistics.viewCount).toLocaleString()}
          </span>
        </p>
        <p className="px-2 font-bold dark:text-slate-400">
          View Count :{" "}
          <span className="text-secondary dark:text-slate-300">
            {parseInt(statistics.likeCount).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoWatchData;
