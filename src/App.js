import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import getSurveyData from "./surveyData";
import { Dataset } from "./Dataset";

class App extends Component {
  state = {
    datasets: [],
    activeDataSet: undefined,
    surveydata: getSurveyData(),
    plot: "welcome"
  };
  constructor() {
    super();
    this.plot = this.plot.bind(this);
    this.receiveAnswersFromSurvey = this.receiveAnswersFromSurvey.bind(this);
    this.returnToMainScreen = this.returnToMainScreen.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="border border-primary">
          <Row>
            <Col sm={12} md={7} className="border border-secondary">
              {this.state.activeDataSet ? (
                <Survey
                  surveydata={this.state.surveydata.find(
                    survey => survey.ID === this.state.activeDataSet.surveyID
                  )}
                  dataset={this.state.activeDataSet}
                  reportAnswers={this.receiveAnswersFromSurvey}
                  returnToMainScreen={this.returnToMainScreen}
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
        {this.state.surveydata.map(survey =>
          this.createSelectSurveyButton(survey)
        )}
      </React.Fragment>
    );
  }

  createSelectSurveyButton(survey) {
    return (
      <div>
        <button
          onClick={() => this.setState({ activeDataSet: new Dataset(survey) })}
        >
          {survey.title}
        </button>
      </div>
    );
  }

  returnToMainScreen() {
    this.setState({ activeDataSet: undefined });
  }

  receiveAnswersFromSurvey(dataset) {
    const updatedData = [...this.state.datasets];
    updatedData.push(dataset);
    this.setState({ datasets: updatedData });
  }
}

export default App;
