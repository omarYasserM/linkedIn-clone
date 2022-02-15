import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";
import "./widgets.scss";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="article">
      <div className="left">
        <FiberManualRecord />
      </div>
      <div className="right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Omar is Back", "Top news - 9099 readers")}
      {newsArticle("Omar is Back", "Top news - 9099 readers")}
      {newsArticle("Omar is Back", "Top news - 9099 readers")}
      {newsArticle("Omar is Back", "Top news - 9099 readers")}
    </div>
  );
}

export default Widgets;
