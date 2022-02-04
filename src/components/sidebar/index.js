import { Avatar } from "@mui/material";
import React from "react";
import "./sideBar.scss";
function index() {
  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src="https://th.bing.com/th/id/R.7e44165bd92d8adb72b6eda48c4a7e3e?rik=wOeDGAfuGShUJA&pid=ImgRaw&r=0"
          alt=""
        />
        <Avatar className="avatar" />
        <h2>Omar yasser</h2>
        <h4>omaryasser.cs@gmail.com</h4>
      </div>
      <div className="stats">
        <div className="stat">
          <p>Connections</p>
          <p className="statNumber">302</p>
        </div>
        <div className="stat">
          <p>Who viewed you</p>
          <p className="statNumber">1043</p>
        </div>
      </div>
      <div className="bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default index;
