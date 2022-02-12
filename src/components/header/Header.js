import React, { useEffect } from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@mui/icons-material/HomeRounded";
import PeopleIcon from "@mui/icons-material/PeopleAltRounded";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/ChatRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Header() {
  const user = useSelector(selectUser);
  const logoutFromApp = () => {
    signOut(auth);
  };
  useEffect(() => {
    console.log(user);
  }, []);

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
          avatar={user.photoURL}
          title="me"
          onClick={logoutFromApp}
        />
      </div>
    </div>
  );
}

export default Header;
