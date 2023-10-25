import React from "react";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { mediaType, mediaUrl, title, copyright, expln } = props;
  return (
    <div className="container">
      <div className="icerik">
        <iframe width={"100%"} height={"400px"} src={mediaUrl}></iframe>
        <p className="bold">{title}</p>
        <p className="bold">Video Credit & Copyright:{copyright}</p>
        <p>
          <span className="bold">Explanation:</span>
          {expln}
        </p>
      </div>

      {/* <div className="icerik">
        <h2>Nasa İçerik 2</h2>
      </div>
      <div className="icerik">
        <h2>Nasa İçerik 3</h2>
      </div> */}
    </div>
  );
};

export default Gonderiler;
