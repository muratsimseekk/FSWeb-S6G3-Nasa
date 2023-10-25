import React from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import Baslik from "./bilesenler/Baslik/Baslik";

function App() {
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
