import React from "react";

const Video = (props) => {
  const { data } = props;
  //src kısmı dolacak videonun kaynak adresi
  return (
    <div>
      <h1>{data.title}</h1>
      <iframe width={"100%"} height={"400px"} src={data.mediaUrl}></iframe>
      <p>{data.explanation}</p>
      <p>{data.copyright}</p>
    </div>
  );
};

export default Video;
