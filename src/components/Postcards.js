import React from "react";
import "./postcards-styles.css";
import Avatar from "@mui/material/Avatar";

const Postcards = ({ username, comment, image }) => {
  return (
    <div className="post">
      {/* avatar + username */}
      <div className="post__header">
        <Avatar className="post__avatar">H</Avatar>
        <h3>{username}</h3>
      </div>
      {/* image */}
      <img className="post__img" src={image} alt="retro" />
      {/* username + comment */}
      <div className="post__comment">
        <strong>{username}</strong>: {comment}
      </div>
    </div>
  );
};

export default Postcards;
