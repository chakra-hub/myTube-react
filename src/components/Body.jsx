import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Body = () => {
  const hamMenu_status = useSelector((store) => store.hamMenu.isMenuOpen);
  return (
    <>
      <Header />
      <div className="home_page">
        {hamMenu_status ? <Sidebar /> : <></>}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
