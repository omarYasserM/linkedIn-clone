import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "../headerOption";
import HomeIcon from "@mui/icons-material/HomeRounded";
import PeopleIcon from "@mui/icons-material/PeopleAltRounded";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/ChatRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <LinkedInIcon className="linkedInIcon" />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://th.bing.com/th/id/R.f320e8226785f0becd06304ac52d8fb7?rik=aizebN3tttwL8w&pid=ImgRaw&r=0"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
