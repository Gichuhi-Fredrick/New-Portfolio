import React from "react";
import "./button.css";

export default function Button({ url, value }) {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="btnContainer">
      <button onClick={() => handleClick(url)}>{value} </button>
    </div>
  );
}
