import React from "react";

const SearchResultCard = ({ card_data }) => {
  return (
    <div className="results_card">
      <div>
        <img
          src={card_data?.snippet?.thumbnails?.medium?.url}
          className="result_img"
        />
      </div>
      <div className="result_card_right">
        <div className="result_title">{card_data?.snippet?.title}</div>
        <div className="result_views_time">
          {card_data?.snippet?.publishedAt.slice(0, 10)}
        </div>
        <div className="result_channel_info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="channel_pic"
          />
          <div className="result_channel_name">
            {card_data?.snippet?.channelTitle}
          </div>
        </div>
        <div className="result_desc">{card_data?.snippet?.description}</div>
      </div>
    </div>
  );
};

export default SearchResultCard;
