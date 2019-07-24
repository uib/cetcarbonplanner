import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import SurveyData from "./surveyData";
import { Dataset } from "./Dataset";
//import { storeDataset, getDataset } from "./Dataset";

class App extends Component {
  state = {
    datasets: [],
    activeDataSet: undefined,
    surveydata: new SurveyData(),
    plot: "test",
    page: "home"
  };
  constructor() {
    super();
    this.plot = this.plot.bind(this);
    this.receiveAnswersFromSurvey = this.receiveAnswersFromSurvey.bind(this);
    this.returnToMainScreen = this.returnToMainScreen.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          navigate={this.setPage}
          viewEnabled={this.state.datasets.length > 0}
        />
        <Container className="border border-primary">
          <Row>
            {/*
            <Col sm={12} md={7} className="border border-secondary">
              {this.state.activeDataSet ? (
                <Survey
                  surveydata={this.state.surveydata}
                  dataset={this.state.activeDataSet}
                  reportAnswers={this.receiveAnswersFromSurvey}
                  returnToMainScreen={this.returnToMainScreen}
                  plotFunction={this.plot}
                />
              ) : (
                this.mainScreen()
              )}
            </Col>{this.getPage()}*/}
            <Col sm={12} md={7} className="border border-secondary">
              {this.getPage()}
            </Col>
            <Col className="border border-secondary">
              <Plot plot={this.state.plot} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  setPage(navigateToPage) {
    this.setState({ page: navigateToPage });
  }

  getPage() {
    switch (this.state.page) {
      case "home":
        return this.getHomePage();
      case "register":
        return this.getRegisterPage();
      case "viewregister":
        return this.getViewPage();
      default:
        return this.getHomePage();
    }
  }

  plot(plotReference) {
    this.setState({ plot: plotReference });
  }

  getHomePage() {
    return (
      <React.Fragment>
        <h4>this is the main screen</h4>
        Register a new trip, or view the stored data.
        {/*
        <button
          onClick={() => this.setState({ activeDataSet: new Dataset(1) })}
        >
          "Register trip"
        </button>*/}
      </React.Fragment>
    );
  }

  createSelectSurveyButton(survey) {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({ activeDataSet: new Dataset(survey.ID) })
          }
        >
          {survey.title}
        </button>
      </div>
    );
  }

  returnToMainScreen() {
    this.setState({ activeDataSet: undefined });
  }

  receiveAnswersFromSurvey(answers, dataset, isSurveyFinished) {
    //does dataset need to be passed here?
    const updatedData = this.state.datasets.filter(
      d => d.UUID !== dataset.UUID
    );
    const newDataSet = new Dataset(
      dataset.surveyID,
      dataset.UUID,
      answers,
      isSurveyFinished
    );
    updatedData.push(newDataSet);
    this.setState({
      datasets: updatedData,
      activeDataSet: isSurveyFinished ? undefined : newDataSet
    });
  }
}

export default App;
