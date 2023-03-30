import React from "react";

const VideoCard = ({ videoData }) => {
  return (
    <div className="video_card">
      <img
        className="thumbnail"
        src={videoData?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <div className="video_title">{videoData?.snippet?.title}</div>
      <div className="channel_name">{videoData?.snippet?.channelTitle}</div>
      <div className="view_and_time">
        {videoData?.statistics?.viewCount > 1000000
          ? Math.round(videoData.statistics.viewCount / 1000000) + "M"
          : Math.round(videoData.statistics.viewCount / 1000) + "K"}{" "}
        Views &#xb7; {videoData?.snippet?.publishedAt?.slice(0, 10)}
      </div>
    </div>
  );
};

export default VideoCard;
