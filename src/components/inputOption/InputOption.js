import React from "react";
import "./inputOption.scss";
function InputOption({ Icon, title, color }) {
  return (
    <div className="option">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
