import React, { useState } from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import Baslik from "./bilesenler/Baslik/Baslik";
import axios from "axios";
import { useEffect } from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

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
      <Container>
        <Row className="containerRow">
          <Col lg="4" md="3" sm="12" className="col-left">
            <Row className="baslik">
              <Baslik />
            </Row>
            <Row>
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
            </Row>
            <Row></Row>
          </Col>
          <Col lg="8" md="7" sm="12" className="col-right">
            <Gonderiler data={datalar} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
