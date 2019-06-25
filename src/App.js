import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import LayoutTester from "./components/layouttester";

class App extends Component {
  state = {};
  render() {
    //this needs to go in its own class
    const alternative1 = { key: "plane", value: "Airplane" };
    const alternative2 = { key: "train", value: "Train" };
    const alternative3 = { key: "car", value: "Car" };
    const alternative4 = { key: "ecar", value: "Electric Car" };
    const alternatives = [
      alternative1,
      alternative2,
      alternative3,
      alternative4
    ];
    const question = {
      title: "Which mode of travel?",
      hours: true,
      alternatives: alternatives
    };
    const questions = [question];
    //this needs to go in its own class

    const cellstyle = "border vw-50";
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          <Row>
            <Col sm={12} md={7} className="border border-secondary">
              <Survey questions={questions} />
            </Col>
            <Col className="border border-secondary">
              <Plot />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
