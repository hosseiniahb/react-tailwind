import { Link } from "react-router-dom";
import { T_Video } from "../../types";
import Card from "./Card";
import { FaCheckCircle } from "react-icons/fa";
import { ChangeEvent, FC } from "react";
import { demoThumbnail } from "../../utils/constants";

type T_VideoCardProps = {
  video: T_Video;
};

const VideoCard: FC<T_VideoCardProps> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card className="w-full sm:max-w-72 dark:bg-[#282c34]">
      <Link
        to={videoId ? `/video/${videoId}` : "#"}
        className="h-20 w-full object-cover"
      >
        <img
          loading="lazy"
          width={382}
          height={287}
          onError={(event: ChangeEvent<HTMLImageElement>) => {
            event.target.src = demoThumbnail;
          }}
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full rounded-t-xl object-cover object-center"
        />
      </Link>
      <div className="w-full space-y-2 px-2 py-4">
        <Link to={videoId ? `/video/${videoId}` : "#"}>
          <h3 className="truncate text-lg font-bold text-slate-700 transition-all hover:text-blue-500 dark:text-slate-100">
            {snippet.title}
          </h3>
        </Link>
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : "#"}>
          <p className="flex items-center gap-2 py-2">
            <span className="text-sm font-bold text-gray-600 dark:text-slate-300">
              {snippet.channelTitle}
            </span>
            <FaCheckCircle className="text-blue-500" size={13} />
          </p>
        </Link>
      </div>
    </Card>
  );
};

export default VideoCard;
