import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import ShimmerWatchPage from "./ShimmerWatchPage";
import SuggestedVideos from "./SuggestedVideos";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoId] = useState(searchParams.get("v"));
  const [videoData, setVideoData] = useState([]);
  const [videoStats, setVideoStats] = useState([]);
  const [likes, setLikes] = useState(1);
  const [liked, setLiked] = useState(false);
  const [subscribe, setSubscribe] = useState("Subscribe");

  const fetchVideoData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setVideoData(data.items[0]);
  };
  const fetchVideoStats = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setVideoStats(data.items[0].statistics);
  };
  const fetchLikes = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setLikes(data.items[0].statistics.likeCount);
  };

  const toggleSubscribe = () => {
    if (subscribe == "Subscribe") {
      setSubscribe("Unsubscribe");
    } else {
      setSubscribe("Subscribe");
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [videoData]);

  useEffect(() => {
    fetchVideoData();

  }, [videoId]);

  useEffect(() => {
    fetchVideoStats();
  }, [videoId]);

  const handleLike = () => {
    if (liked == true) {
      setLikes(Number(likes) - 1);
      setLiked(false);
    } else {
      setLikes(Number(likes) + 1);
      setLiked(true);
    }
  };
  return videoData.length == 0 ? (
    <ShimmerWatchPage />
  ) : (
    <>
      <div className="video_details_container" key={videoData.id}>
        <iframe
          className="iframe"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="video_title_text">{videoData?.snippet?.title}</div>
        <div className="analytics_container">
          <img
            className="channel_logo"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <ul className="channel_name_subs">
            <li className="channel_name_text">
              {videoData?.snippet?.channelTitle}
            </li>
            <li className="subscriber">106K subscribers</li>
          </ul>
          <div
            className="subscribed"
            onClick={toggleSubscribe}
            style={
              subscribe == "Subscribe"
                ? { backgroundColor: "gainsboro", color: "black" }
                : { backgroundColor: "black", color: "white" }
            }
          >
            {subscribe}
          </div>
          <div className="likes">
            <img
              onClick={handleLike}
              style={
                liked == true
                  ? {
                      backgroundColor: "rgb(170, 168, 168)",
                      borderRadius: "25px",
                    }
                  : {
                      backgroundColor: "gainsboro",
                    }
              }
              className="analytics_icon"
              src="https://www.freepnglogos.com/uploads/like-png/like-icon-line-iconset-iconsmind-35.png"
              alt=""
            />{" "}
            {likes}
          </div>
          <div className="share_btn">
            <img
              className="analytics_icon"
              src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_share-512.png"
              alt=""
            />{" "}
            Share{" "}
          </div>
        </div>
        <div className="description">
          <h4>
            {videoStats.viewCount} views,{" "}
            {videoData?.snippet?.publishedAt.slice(0, 10)}
          </h4>
          <p>{videoData?.snippet?.description}</p>
        </div>
      </div>
      <div className="live_suggested">
        <LiveChat />
        <SuggestedVideos />
      </div>
    </>
  );
};

export default WatchPage;
