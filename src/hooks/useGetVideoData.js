import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

export const useGetVideoData = () => {
  const [videoData, setVideoData] = useState([]);
  const fetchPopularVideos = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
        GOOGLE_API_KEY
    );
    const data = await response.json();
    setVideoData(data.items);
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return videoData;
};
