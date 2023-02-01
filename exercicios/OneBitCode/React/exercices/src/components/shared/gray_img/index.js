import React, { Fragment } from "react";
import "./style.css";

export default function GrayImg(props) {
  return (
    <div>
      <img
        className={props.gray == true ? "gray-img" : "color-img"}
        src={props.img_url}></img>
    </div>
  );
}
