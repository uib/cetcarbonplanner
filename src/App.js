import React, { Component } from "react";
import Survey from "./components/Survey";
import Plot from "./components/Plot";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import SurveyData from "./surveyData";
import { Dataset } from "./dataset";
import View from "./components/View";
import { getStorage, updateStorage, updateLimits, getLimits } from "./storage";
import Settings from "./components/Settings";

/**This is the main component which draws the page layout, calls on the subcomponents and keeps track of the main states.  */
class App extends Component {
  constructor() {
    super();
    this.state = {
      tripCarbonLimit: getLimits().tripCarbonLimit,
      meetingCarbonLimit: getLimits().meetingCarbonLimit,
      activeDataSet: undefined,
      datasets: getStorage(),
      surveydata: new SurveyData("trip"),
      plot: undefined,
      page: "home",
      height: window.innerHeight * 0.6,
      CETcolor: "4EBBDF"
    };
    this.plotDataset = this.plotDataset.bind(this);
    this.receiveAnswersFromSurvey = this.receiveAnswersFromSurvey.bind(this);
    this.setPage = this.setPage.bind(this);
    this.editDataset = this.editDataset.bind(this);
    this.deleteDataset = this.deleteDataset.bind(this);
    this.setcarbonlimit = this.setcarbonlimit.bind(this);
  }

  setcarbonlimit(type, limit) {
    const updateObject =
      type === "trip"
        ? {
            tripCarbonLimit: limit,
            meetingCarbonLimit: this.state.meetingCarbonLimit
          }
        : {
            tripCarbonLimit: this.state.tripCarbonLimit,
            meetingCarbonLimit: limit
          };
    this.updateDataSets(updateObject, true);
  }

  /*To make sure datasets are saved to local storage, use this function
  to update datasets, instead of calling this.setState directly. Include any other
  required updates in the updateObject */
  updateDataSets(updateObject, isLimit) {
    if (isLimit) {
      updateLimits(updateObject);
    } else {
      updateStorage(updateObject.datasets);
    }

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
      update.plot = undefined;
    }
    this.updateDataSets(update);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="border border-primary rounded mb-0">
          <NavBar
            navigate={this.setPage}
            datasetLength={this.state.datasets.length}
          />
          <Row style={{ minHeight: this.state.height }}>
            <Col sm={12} md={7} /*className="border border-secondary"*/>
              {this.getPage()}
            </Col>
            {this.state.plot && (
              <Col /*className="border border-secondary"*/>
                {this.getPlot()}
              </Col>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  getPlot() {
    if (this.state.plot) {
      return (
        <Plot
          data={this.state.plot}
          model={this.state.surveydata.model}
          type={this.state.plotType}
          limit={
            this.state.plotType === "trip"
              ? this.state.tripCarbonLimit
              : this.state.meetingCarbonLimit
          }
        />
      );
    } else return "";
  }

  setPage(navigateToPage, datasetID) {
    const paramObj = {
      plot: undefined,
      page:
        navigateToPage === "trip" || navigateToPage === "meeting"
          ? "register"
          : navigateToPage
    };
    if (navigateToPage === "trip") {
      const survey = new SurveyData("trip");
      paramObj.surveydata = survey;
      paramObj.activeDataSet = new Dataset("trip");
    } else if (navigateToPage === "meeting") {
      const survey = new SurveyData("meeting");
      paramObj.surveydata = survey;
      paramObj.activeDataSet = new Dataset("meeting");
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
      case "settings":
        return this.getSettingsPage();
      default:
        return this.getHomePage();
    }
  }

  plotDataset(type, enabledList) {
    const plotList = this.state.datasets.filter(
      (dataset, index) => enabledList[index] && dataset.surveyID === type
    );
    if (plotList.length > 0) {
      this.setState({
        plot: plotList.flatMap(o => o.answers.slice(-1)).flatMap(l => l),
        plotType: type
      });
    } else {
      this.setState({ plot: undefined, plotType: undefined });
    }
  }

  getSettingsPage() {
    return (
      <Settings
        triplimit={this.state.tripCarbonLimit}
        meetinglimit={this.state.meetingCarbonLimit}
        limitfunction={this.setcarbonlimit}
      />
    );
  }

  getViewPage() {
    return (
      <View
        datasets={this.state.datasets}
        surveydata={this.state.surveydata}
        editDataset={this.editDataset}
        deleteDataset={this.deleteDataset}
        plotDataset={this.plotDataset}
        triplimit={this.state.tripCarbonLimit}
        meetinglimit={this.state.meetingCarbonLimit}
      />
    );
  }

  getRegisterPage() {
    return (
      <Survey
        surveydata={this.state.surveydata}
        defaultName={
          this.state.activeDataSet.surveyID.charAt(0).toUpperCase() +
          this.state.activeDataSet.surveyID.slice(1) +
          " " +
          (this.state.datasets.length + 1)
        }
        dataset={this.state.activeDataSet}
        reportAnswers={this.receiveAnswersFromSurvey}
        navigate={this.setPage}
        plotFunction={this.plotObject}
      />
    );
  }

  getHomePage() {
    return (
      <React.Fragment>
        <h4>CET Carbon Planner</h4>
        The CET Carbon Planner is a CO2 calculator for calculating climate gas
        emissions from own long-distance travels and from plane travels by
        participants to meetings organized. It is designed to give an overview
        of total emissions from own travels and meetings, assuming that this
        will contribute to raising awareness of own emissions, which is a
        central element in the CET Low-carbon Travel Policy.
      </React.Fragment>
    );
  }

  receiveAnswersFromSurvey(dataset, name, answers) {
    if (!dataset) {
      //used by the cancel button to return to main menu with no changes
      this.setState({ page: "home" });
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
      this.updateDataSets({ datasets: updatedData, page: "home" });
    }
  }
}

export default App;
