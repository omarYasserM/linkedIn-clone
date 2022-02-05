import { Avatar } from "@mui/material";
import React from "react";
import "./headerOption.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="icon"></Icon>}
      {avatar && <Avatar className="avatar" src={avatar} />}
      <span className="title">{title}</span>
    </div>
  );
}

export default HeaderOption;
