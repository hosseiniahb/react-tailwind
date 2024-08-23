import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { T_ChannelDetail, T_Video } from "../types";
import { Button, ChannelCard, Videos } from "../components/ui";
import { IoArrowBack } from "react-icons/io5";
import { demoBannerChannel } from "../utils/constants";

const ChannelDetail = () => {
  // State variable to store received channel details
  const [channelDetail, setChannelDetail] = useState<T_ChannelDetail | null>(
    null,
  );

  // Mode variable to save selected video data
  const [videos, setVideos] = useState<T_Video[]>([]);

  // Function to redirect to a specific path
  const navigate = useNavigate();

  // Get channel id value from url
  const { channelId } = useParams();

  useEffect(() => {
    // Gets the details of the selected channel and stores it in the state variable
    fetchFromApi(`/channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetail(data.items[0]),
    );

    // Gets the videos for the selected channel and stores it in the state variable
    fetchFromApi(`/search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => setVideos(data.items),
    );
  }, [channelId]);

  return (
    <section className="w-full">
      <header className="w-full">
        <img
          src={
            channelDetail?.brandingSettings?.image?.bannerExternalUrl ??
            demoBannerChannel
          }
          alt={channelDetail?.snippet.title}
          width={"100%"}
          height={38}
          className="relative z-10 h-48 w-full object-cover object-center"
        />
        <div className="flex flex-col items-start gap-3 px-5 py-3">
          <Button
            onClick={() => navigate(-1)}
            variant="transparent"
            className="flex items-center gap-2 dark:border-slate-700 dark:text-slate-300"
          >
            <IoArrowBack />
            Back
          </Button>
          {channelDetail && (
            <ChannelCard channelDetail={channelDetail} className="w-full" />
          )}
        </div>
      </header>
      <main className="container mx-auto px-5 py-20 md:px-0">
        <Videos data={videos} className="!justify-center" />
      </main>
    </section>
  );
};

export default ChannelDetail;
