import React from "react";
import "./ImageViewer.css";
const ImageViewer = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.url}></img>
      <p>
        <span className="bold">Explanation:</span>
        {data.explanation}
      </p>
      <p className="bold">
        {data.media_type.toUpperCase()} Credit & Copyright {data.copyright}:
      </p>
    </div>
  );
};

export default ImageViewer;
