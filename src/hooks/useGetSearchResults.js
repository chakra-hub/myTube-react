import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

export const useGetSearchResults = () => {
  const [get_query] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${get_query.get(
        "search_query"
      )}&type=video&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setSearchResults(data.items);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [get_query]);

  return searchResults;
};
