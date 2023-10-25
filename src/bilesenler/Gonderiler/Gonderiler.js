import React from "react";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { mediaType, mediaUrl } = props;
  return (
    <div className="container">
      <div className="icerik">
        <video controls>
          <source src={mediaUrl} type={mediaType}></source>
        </video>
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
