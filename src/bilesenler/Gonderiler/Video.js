import React from "react";

const Video = (props) => {
  const { data } = props;
  //src kısmı dolacak videonun kaynak adresi
  return (
    <div className="videoDiv">
      <h1>{data.title}</h1>
      <img
        style={{ opacity: "0.6" }}
        src="https://s3.amazonaws.com/digitaltrends-uploads-prod/2015/08/black-hole.jpg"
      ></img>
      <iframe src={data.mediaUrl}></iframe>
      <img
        style={{ opacity: ".8" }}
        src="https://wallpaperaccess.com/full/2867611.jpg"
      ></img>
      {/* <p>{data.explanation}</p>
      <p>{data.copyright}</p> */}
    </div>
  );
};

export default Video;
