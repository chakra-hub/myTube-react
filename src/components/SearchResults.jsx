import { Link } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import { useGetSearchResults } from "../hooks/useGetSearchResults";


const SearchResults = () => {
  const searchResults = useGetSearchResults();

  return (
    <div className="results_container">
      {searchResults.map((element) => {
        return (
          <Link key={element.id.videoId} to={"/watch?v=" + element.id.videoId}>
            <SearchResultCard key={element.id.videoId} card_data={element} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
