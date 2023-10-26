import React from "react";
import "./Gonderiler.css";
import Video from "./Video";
import ImageViewer from "./ImageViewer";
const Gonderiler = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div className="mediaContent">
        {data ? (
          <>
            {data.media_type === "video" ? (
              <Video data={data} />
            ) : (
              <ImageViewer data={data} />
            )}
          </>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};

export default Gonderiler;
