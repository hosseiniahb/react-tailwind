import { Fragment } from "react/jsx-runtime";
import { T_Video } from "../../types";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { clsx as cn } from "clsx";
import { FC } from "react";

type T_VideosProps = {
  data: T_Video[];
  className?: string;
};

const Videos: FC<T_VideosProps> = ({ data, className }) => {
  return (
    <section
      className={cn(
        "flex max-w-full flex-wrap justify-center gap-2 sm:justify-start",
        className,
      )}
    >
      {data.map((video: T_Video, index: number) => (
        <Fragment key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && (
            <ChannelCard channelDetail={video} className="w-full sm:max-w-72" />
          )}
        </Fragment>
      ))}
    </section>
  );
};

export default Videos;
