import React from "react";
import Table from "./component/Table";
import "./App.css";
import Datepicker from "./component/Datepicker";
import Autocompleter from "./component/Autocomplete";
import "react-block-ui/style.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Card border="primary" style={{ width: "70%", margin: "5%" }}>
        <Card.Body>
          <Card.Title>
            <h1>Hello</h1>
          </Card.Title>
          <Card.Text>
            <Container style={{ border: "1px solid black" }}>
              <Row>
                <Col>
                  <label className="label"> Date & Timepicker : </label>
                  <Datepicker />
                </Col>
                <Col>
                  <label className="label"> Autocomplete from API : </label>
                  <Autocompleter />
                </Col>
              </Row>
            </Container>
            <hr />
            <Table />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
