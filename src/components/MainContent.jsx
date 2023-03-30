import FilterCategory from "./FilterCategory";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { useGetVideoData } from "../hooks/useGetVideoData";

const MainContent = () => {
  const videoData = useGetVideoData(); 

  return (
    <div className="main_content">
      <FilterCategory />
      {videoData.length > 0 ? (
        <div className="videos">
          {videoData.map((element) => {
            return (
              <Link to={"/watch?v=" + element.id} key={element.id}>
                <VideoCard videoData={element} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="shimmer_container">
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
          <ShimmerVideoCard />
        </div>
      )}
    </div>
  );
};

export default MainContent;
