import React from "react";
import "./ImageViewer.css";
const ImageViewer = (props) => {
  const { data } = props;

  return (
    <div className="imgDiv">
      <h1>{data.title}</h1>
      <img
        style={{ opacity: "0.6" }}
        src="https://s3.amazonaws.com/digitaltrends-uploads-prod/2015/08/black-hole.jpg"
      ></img>
      <img src={data.url}></img>
      {/* <p>
        <span className="bold">Explanation:</span>
        {data.explanation}
      </p> */}

      <img
        style={{ opacity: ".8" }}
        src="https://wallpaperaccess.com/full/2867611.jpg"
      ></img>
      <p className="bold">
        {data.media_type.toUpperCase()} Credit & Copyright {data.copyright}:
      </p>
    </div>
  );
};

export default ImageViewer;
