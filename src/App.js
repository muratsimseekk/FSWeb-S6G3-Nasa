import React, { useState } from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import Baslik from "./bilesenler/Baslik/Baslik";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [datalar, setDatalar] = useState();
  const getData = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=kNvjfx78evUBjcxdoDuRSSE7XO0lPtSp5lyzJ5Mq"
      )
      .then((veriler) => {
        setDatalar(veriler.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("2", datalar.media_type);

  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip
        edin İyi eğlenceler!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Baslik />
      <Gonderiler mediaType={datalar.media_type} mediaUrl={datalar.url} />
    </div>
  );
}

export default App;
