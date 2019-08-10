import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/Chart";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar";
import SurveyData from "./surveyData";
import { Dataset } from "./Dataset";
import View from "./components/View";
import { getStorage, updateStorage } from "./Storage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeDataSet: undefined,
      datasets: getStorage(),
      surveydata: new SurveyData("trip"),
      plot: { type: "text", data: "Hello" },
      page: "home",
      height: window.innerHeight * 0.6,
      CETcolor: "4EBBDF"
    };
    this.plotDataset = this.plotDataset.bind(this);
    this.receiveAnswersFromSurvey = this.receiveAnswersFromSurvey.bind(this);
    this.setPage = this.setPage.bind(this);
    this.editDataset = this.editDataset.bind(this);
    this.deleteDataset = this.deleteDataset.bind(this);
  }

  /*To make sure datasets are saved to local storage, use this function
  to update datasets, instead of calling this.setState directly. Include any other
  required updates in the updateObject */
  updateDataSets(updateObject) {
    updateStorage(updateObject.datasets);
    this.setState(updateObject);
  }

  editDataset(index) {
    this.setPage("edit", index);
  }

  deleteDataset(index) {
    const newDataSet = [...this.state.datasets];
    newDataSet.splice(index, 1);
    const update = { datasets: newDataSet };
    if (newDataSet.length === 0) {
      update.page = "home";
    }
    this.updateDataSets(update);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="border border-primary">
          <NavBar
            navigate={this.setPage}
            datasetLength={this.state.datasets.length}
          />
          <Row style={{ minHeight: this.state.height }}>
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

  setPage(navigateToPage, datasetID) {
    const paramObj = {
      page:
        navigateToPage === "trip" || navigateToPage === "meeting"
          ? "register"
          : navigateToPage
    };
    if (navigateToPage === "trip") {
      const survey = new SurveyData("trip");
      paramObj.surveydata = survey;
      paramObj.activeDataSet = new Dataset("trip");
    } else if (navigateToPage === "edit") {
      const dataset = this.state.datasets[datasetID];
      paramObj.activeDataSet = dataset;
      paramObj.surveydata = new SurveyData(dataset.surveyID);
    } else {
      paramObj.activeDataSet = undefined;
    }
    this.setState(paramObj);
  }

  getPage() {
    switch (this.state.page) {
      case "home":
        return this.getHomePage();
      case "register":
        return this.getRegisterPage();
      case "edit":
        return this.getRegisterPage();
      case "view":
        return this.getViewPage();
      case "data":
        return this.getDataPage();
      default:
        return this.getHomePage();
    }
  }

  plotDataset(ID) {
    this.setState({ plot: ID });
  }

  getDataPage() {
    //data analyis, advanced plots and import/export
  }

  getViewPage() {
    return (
      <View
        datasets={this.state.datasets}
        surveydata={this.state.surveydata}
        editDataset={this.editDataset}
        deleteDataset={this.deleteDataset}
        plotDataset={this.plotDataset}
      />
    );
    //return the current datasets in list form
    //table should include plot and edit buttons
  }

  getRegisterPage() {
    return (
      <Survey
        surveydata={this.state.surveydata}
        defaultName={
          this.state.page === "edit"
            ? this.state.activeDataSet.name
            : "Trip " + (this.state.datasets.length + 1)
        }
        dataset={this.state.activeDataSet}
        reportAnswers={this.receiveAnswersFromSurvey}
        navigate={this.setPage}
        plotFunction={this.plotDataset}
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
      this.updateDataSets({ datasets: updatedData, page: "main" });
    }
  }
}

export default App;
