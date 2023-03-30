import React from "react";
import { useGetVideoData } from "../hooks/useGetVideoData";

const SuggestedVideos = () => {
  const videoData = useGetVideoData();

  return (
    <div className="suggested_videos_container">
      {videoData.splice(20,10).map((element) => {
        return (
          <div className="sug_video_card" key={element.id}>
            <img
              src={element?.snippet?.thumbnails?.medium?.url}
              className="sug_thumbnail"
            ></img>
            <div className="sug_video_details">
              <div className="sug_title">
                {element?.snippet?.title.slice(0, 40)}...
              </div>
              <div className="sug_channel_name">
                {element?.snippet?.channelTitle}
              </div>
              <div className="sug_views_time">
                {element?.statistics?.viewCount > 1000000
                  ? Math.round(element.statistics.viewCount / 1000000) + "M"
                  : Math.round(element?.statistics.viewCount / 1000) + "K"}{" "}
                Views &#xb7; {element?.snippet?.publishedAt?.slice(0, 10)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedVideos;
