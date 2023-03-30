import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar_item">
          <img
            className="sidebar_icons"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt=""
          />
          Home
        </div>
      </Link>
      <div className="sidebar_item">
        <img
          className="sidebar_icons"
          src="https://static.thenounproject.com/png/2481186-200.png"
          alt=""
        />
        Library
      </div>
      <div className="sidebar_item">
        <img
          className="sidebar_icons"
          src="https://static.thenounproject.com/png/456181-200.png"
          alt=""
        />
        Shorts
      </div>
      <div className="sidebar_item">
        <img
          className="sidebar_icons"
          src="https://cdn1.iconfinder.com/data/icons/material-core/21/history-512.png"
          alt=""
        />
        History
      </div>
      <div className="sidebar_item">
        <img
          className="sidebar_icons"
          src="https://png.pngitem.com/pimgs/s/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png"
          alt=""
        />
        Liked Videos
      </div>
    </div>
  );
};

export default Sidebar;
