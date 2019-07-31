import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import SurveyData from "./surveyData";
import { Dataset } from "./Dataset";
import View from "./components/View";

class App extends Component {
  state = {
    datasets: [],
    surveydata: new SurveyData(),
    plot: "test",
    page: "home"
  };
  constructor() {
    super();
    this.plot = this.plot.bind(this);
    this.receiveAnswersFromSurvey = this.receiveAnswersFromSurvey.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="border border-primary">
          <NavBar
            navigate={this.setPage}
            datasetLength={this.state.datasets.length}
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

  getDataPage() {
    //data analyis, advanced plots and import/export
  }

  getViewPage() {
    return (
      <View datasets={this.state.datasets} surveydata={this.state.surveydata} />
    );
    //return the current datasets in list form
    //table should include plot and edit buttons
  }

  getRegisterPage(editDataSet) {
    const dataset = editDataSet ? editDataSet : new Dataset();
    //The passed parameter is a dataset to be edited. If you're adding a new dataset, no parameter is passed.
    return (
      <Survey
        surveydata={this.state.surveydata}
        datasetNumber={this.state.datasets.length + 1}
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
        <h4>this is the home screen</h4>
        Register a new trip, or view the stored data.
      </React.Fragment>
    );
  }

  receiveAnswersFromSurvey(dataset, name, answers) {
    if (!dataset) {
      //used by the cancel button to return to main menu with no changes
      this.setState({ page: "main" });
    } else {
      //If the dataset has been edited and updated, the old one will be removed from datasets here:
      const updatedData = this.state.datasets.filter(
        d => d.UUID !== dataset.UUID
      );
      const newDataSet = new Dataset(
        dataset.surveyID,
        dataset.UUID,
        name,
        answers
      );
      updatedData.push(newDataSet);
      this.setState({ datasets: updatedData, page: "main" });
    }
  }
}

export default App;
