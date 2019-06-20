import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Survey from "./components/survey";
import Plot from "./components/plot";
import NavBar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <Container>
        <NavBar />
        <Row>
          <Col xs={7}>
            <Survey />
          </Col>
          <Col>
            <Plot />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
