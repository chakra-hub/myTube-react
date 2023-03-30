import React, { useState, useEffect } from "react";
import { openAndCloseMenu } from "../utils/hamMenuSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCache } from "../utils/cacheSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();
  const searchCache = useSelector((store) => store.cache);

  const youtube_search_api = async () => {
    let data = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        search
    );
    let json_data = await data.json();
    setSearchResult(json_data[1]);
    dispatch(setCache({ [search]: json_data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSearchResult(searchCache[search]);
      } else {
        youtube_search_api();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="header">
      <div className="header_left_section">
        <img
          className="hamburger_menu"
          onClick={() => dispatch(openAndCloseMenu())}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt=""
        />
        <Link to="/">
          <img
            className="youtube_icon"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt=""
          />
        </Link>
      </div>
      <div className="header_middle_section">
        <input
          type="search"
          placeholder="Search"
          className="search_bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="search_results">
          {searchResult ? (
            searchResult.map((element, index) => {
              return (
                <li key={index} className="search_result_item">
                  <Link
                    to={"/results?search_query=" + element}
                    onClick={() => setSearch("")}
                  >
                    {element}
                  </Link>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="header_right_section">
        <img
          className="right_header_icon"
          src="https://cdn1.iconfinder.com/data/icons/media-32/24/485-512.png"
          alt=""
        />
        <img
          className="right_header_icon"
          src="https://www.citypng.com/public/uploads/small/11640343342ezruhtak2eqlwlpjvcpusdulgnjntqoijktm8vfk5lbowzhwm6ufti9vdjag8t9cmwug2birxqxklbv1ykfpnntupqtdhizrrpfr.png"
          alt=""
        />
        <img
          className="right_header_icon"
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
