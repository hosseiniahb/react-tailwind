import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { RelatedVideos, VideoWatchData } from "../components/ui";
import { T_Video, T_VideoDetail } from "../types";

const VideoDetail = () => {
  // A state variable to store the details of the selected video
  const [videoDetail, setVideoDetail] = useState<T_VideoDetail | null>(null);

  // A mode variable to save the videos associated with the selected video
  const [relatedVideos, seRelatedVideos] = useState<T_Video[]>([]);

  // Get the video ID value from the URL
  const { id } = useParams();

  useEffect(() => {
    // Gets the information of the selected video through its ID and stores it in the state variable
    fetchFromApi(`/videos?part=snippet,statistics&id=${id}`).then((data) => {
      if (data?.items?.length) {
        setVideoDetail(data.items[0]);
      }
    });

    // Gets the videos corresponding to the selected video and stores it in the state variable
    fetchFromApi(`/search?part=snippet&relatedToVideoId=${id}`).then((data) => {
      if (data?.items?.length) {
        seRelatedVideos(data.items);
      }
    });
  }, [id]);

  return (
    <section className="container mx-auto flex min-h-[95vh] flex-col items-start justify-center px-3 py-5 lg:flex-row">
      <div className="flex w-full flex-col gap-5 lg:sticky lg:top-10 lg:w-9/12">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width={"100%"}
          height={"60vh"}
          style={{ borderRadius: 12, overflow: "hidden" }}
          controls
        />

        {videoDetail && (
          <VideoWatchData
            snippet={videoDetail.snippet}
            statistics={videoDetail.statistics}
          />
        )}
      </div>
      {relatedVideos.length > 1 && (
        <RelatedVideos relatedVideos={relatedVideos} />
      )}
    </section>
  );
};

export default VideoDetail;
