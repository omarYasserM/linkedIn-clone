import { Avatar } from "@mui/material";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import "./sideBar.scss";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );
  const divElement = useRef(null);
  const user = useSelector(selectUser);
  return (
    <div
      className="sidebar"
      style={
        divElement.current && { top: -divElement.current.clientHeight - 28 }
      }
    >
      <div className="top" ref={divElement}>
        <img
          src="https://th.bing.com/th/id/R.7e44165bd92d8adb72b6eda48c4a7e3e?rik=wOeDGAfuGShUJA&pid=ImgRaw&r=0"
          alt=""
        />
        <Avatar className="avatar" src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>Frontend developer</h4>
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

export default Sidebar;
