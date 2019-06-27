import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import getSurveyData from "./surveyData";

class App extends Component {
  state = { datasets: [] };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          <Row>
            <Col sm={12} md={7} className="border border-secondary">
              <Survey
                surveydata={getSurveyData()}
                reportAnswers={this.reportAnswers}
              />
            </Col>
            <Col className="border border-secondary">
              <Plot />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  reportAnswers(dataset) {
    const updatedData = [...this.state.datasets].push(dataset);
    this.setState({ datasets: updatedData });
  }
}

export default App;
