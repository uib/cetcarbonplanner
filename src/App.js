import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import getSurveyData from "./surveyData";

class App extends Component {
  state = { datasets: [], survey: undefined };
  constructor() {
    super();
    this.returnToMainScreen = this.returnToMainScreen.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          {this.state.survey ? (
            <Survey
              surveydata={this.state.survey}
              reportAnswers={this.reportAnswers}
              returnFunction={this.returnToMainScreen}
            />
          ) : (
            this.mainScreen()
          )}
        </Container>
      </React.Fragment>
    );
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
