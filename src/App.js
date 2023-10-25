import React, { useState } from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import Baslik from "./bilesenler/Baslik/Baslik";
import axios from "axios";

function App() {
  const [datalar, setDatalar] = useState("");

  async function getData() {
    try {
      const veri = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=qdvLEGxhOMGRoctdZfklB3YkBPFdWuIJhkrOcf0T"
      );
      // console.log(veri);
      const veriler = veri.data;
      setDatalar(veriler);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
  // console.log(datalar);
  getData();
  // console.log(getData());
  // getData();
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
      <Gonderiler />
    </div>
  );
}

export default App;
