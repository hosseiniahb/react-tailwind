import { FC } from "react";
import { T_ChannelDetail } from "../../types";

type ChannelStatisticsProps = {
  channelDetail: T_ChannelDetail;
};

const ChannelStatistics: FC<ChannelStatisticsProps> = ({ channelDetail }) => {
  return (
    channelDetail?.statistics && (
      <div className="flex flex-wrap items-center justify-center gap-2 pb-5">
        <p className="px-2 font-bold dark:text-slate-400">
          Subscriber :{" "}
          <span className="text-secondary dark:text-slate-300">
            {parseInt(
              channelDetail.statistics.subscriberCount,
            ).toLocaleString()}
          </span>
        </p>
        <p className="px-2 font-bold dark:text-slate-400">
          Video Count :{" "}
          <span className="text-secondary dark:text-slate-300">
            {parseInt(channelDetail.statistics.videoCount).toLocaleString()}
          </span>
        </p>
        <p className="px-2 font-bold dark:text-slate-400">
          View Count :{" "}
          <span className="text-secondary dark:text-slate-300">
            {parseInt(channelDetail.statistics.viewCount).toLocaleString()}
          </span>
        </p>
      </div>
    )
  );
};

export default ChannelStatistics;
