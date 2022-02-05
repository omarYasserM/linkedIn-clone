import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./post.scss";
import InputOption from "../inputOption/InputOption";

function Post({ name, desc, message, photoURL }) {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar />
        <div className="info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>

      <div className="postButtons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
