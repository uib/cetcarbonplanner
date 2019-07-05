import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import getSurveyData from "./surveyData";
import { getUUID } from "./uuid";

class App extends Component {
  state = { datasets: [], selectedSurveyQuestions: undefined, plot: "welcome" };
  constructor() {
    super();
    this.returnToMainScreen = this.returnToMainScreen.bind(this);
    this.plot = this.plot.bind(this);
    this.reportAnswers = this.reportAnswers.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          <Row>
            <Col sm={12} md={7} className="border border-secondary">
              {this.state.selectedSurveyQuestions ? (
                <Survey
                  surveydata={this.state.selectedSurveyQuestions}
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

  receiveDatasetFromSurvey() {}

  plot(plotReference) {
    this.setState({ plot: plotReference });
  }

  mainScreen() {
    const surveys = getSurveyData();
    return (
      <React.Fragment>
        <h4>this is the main screen</h4>
        {surveys.map(survey => this.createSelectSurveyButton(survey))}
      </React.Fragment>
    );
  }

  createSelectSurveyButton(survey) {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({ selectedSurveyQuestions: survey.questions })
          }
        >
          {survey.title}
        </button>
      </div>
    );
  }

  returnToMainScreen() {
    this.setState({ selectedSurveyQuestions: undefined });
  }

  reportAnswers(dataset) {
    const updatedData = [...this.state.datasets];
    updatedData.push(dataset);
    this.setState({ datasets: updatedData });
  }
}

export default App;
