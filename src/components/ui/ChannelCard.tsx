import { Link } from "react-router-dom";
import Card from "./Card";
import { T_ChannelDetail } from "../../types";
import { FaCheckCircle } from "react-icons/fa";
import { FC } from "react";
import ChannelStatistics from "./ChannelStatistics";

type ChannelCardProps = {
  channelDetail: T_ChannelDetail;
  className?: string;
};

const ChannelCard: FC<ChannelCardProps> = ({ channelDetail, className }) => {
  return (
    <Card className={`${className}`}>
      <Link
        to={
          channelDetail?.id?.channelId
            ? `/channel/${channelDetail.id.channelId}`
            : "#"
        }
        className="flex flex-col items-center justify-center p-3"
      >
        <img
          loading="lazy"
          width={240}
          height={240}
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          className="h-60 w-60 rounded-full border object-cover object-center dark:border-slate-700"
        />

        <div className="flex items-center justify-center gap-2 py-3">
          <h6 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {channelDetail?.snippet?.channelTitle ||
              channelDetail?.snippet?.title}
          </h6>
          <FaCheckCircle className="text-blue-500" />
        </div>
      </Link>

      <ChannelStatistics channelDetail={channelDetail} />
    </Card>
  );
};

export default ChannelCard;
