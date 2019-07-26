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
        <Container className="border border-primary">
          <NavBar
            navigate={this.setPage}
            viewEnabled={this.state.datasets.length /*used as boolean*/}
          />
          <Row>
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
      case "view":
        return this.getViewPage();
      case "data":
        return this.getDataPage();
      default:
        return this.getHomePage();
    }
  }

  plot(plotReference) {
    this.setState({ plot: plotReference });
  }

  getRegisterPage(editDataSet) {
    const dataset = editDataSet ? editDataSet : new Dataset();
    //The passed parameter is a dataset to be edited. If you're adding a new dataset, no parameter is passed.
    return (
      <Survey
        surveydata={this.state.surveydata}
        dataset={dataset}
        reportAnswers={this.receiveAnswersFromSurvey}
        navigate={this.setPage}
        plotFunction={this.plot}
      />
    );
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
    this.setState({ activeDataSet: undefined, page: "home" });
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
