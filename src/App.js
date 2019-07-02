import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import getSurveyData from "./surveyData";

class App extends Component {
  state = { datasets: [], survey: undefined, plot: "welcome" };
  constructor() {
    super();
    this.returnToMainScreen = this.returnToMainScreen.bind(this);
    this.plot = this.plot.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          <Row>
            <Col sm={12} md={7} className="border border-secondary">
              {this.state.survey ? (
                <Survey
                  surveydata={this.state.survey}
                  reportAnswers={this.reportAnswers}
                  returnFunction={this.returnToMainScreen}
                  plotFunction={this.plot}
                />
              ) : (
                this.mainScreen()
              )}
            </Col>
            <Col className="border border-secondary">
              <Plot plot={"test"} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  plot(plotReference) {
    this.setState({ plot: plotReference });
  }

  mainScreen() {
    return (
      <React.Fragment>
        <h4>this is the main screen</h4>
        <button onClick={() => this.setState({ survey: getSurveyData() })}>
          Start new survey.
        </button>
      </React.Fragment>
    );
  }

  returnToMainScreen() {
    this.setState({ survey: undefined });
  }

  reportAnswers(dataset) {
    const updatedData = [...this.state.datasets].push(dataset);
    this.setState({ datasets: updatedData });
  }
}

export default App;
