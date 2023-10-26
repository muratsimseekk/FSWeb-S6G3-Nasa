import React, { useState } from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import Baslik from "./bilesenler/Baslik/Baslik";
import axios from "axios";
import { useEffect } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function App() {
  const [datalar, setDatalar] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const myAPIKey = "kNvjfx78evUBjcxdoDuRSSE7XO0lPtSp5lyzJ5Mq";
  const getData = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${myAPIKey}&date=${date}&thumbs=true`
      )
      .then((veriler) => {
        setDatalar(veriler.data);
      });
  };

  // useEffect(() => {
  //   getData();
  // }, [datalar]);

  useEffect(() => {
    getData();
  }, [date]);

  if (!datalar) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Baslik />
      <FormGroup>
        <Label style={{ fontSize: "2rem" }} md={3}>
          Select a Date
        </Label>
        <Input
          id="nasaInput"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "30%", margin: "0 auto" }}
        />
      </FormGroup>
      <Gonderiler data={datalar} />
    </div>
  );
}

export default App;
