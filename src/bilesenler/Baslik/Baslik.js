import React, { useState } from "react";
import "./Baslik.css";

const Baslik = (props) => {
  return (
    <div className="baslik">
      <h1>NASA Uygulaması</h1>
      <h2>Astronomy Picture of the Day</h2>
      <p>
        Discover the cosmos! Each day a different image or photograph of our
        fascinating universe is featured, along with a brief explanation written
        by a professional astronomer.{" "}
      </p>
    </div>
  );
};

export default Baslik;
