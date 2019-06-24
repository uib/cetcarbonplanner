import React, { Component } from "react";
import Survey from "./components/survey";
import Plot from "./components/plot";
import NavBar from "./components/navbar";
import LayoutTester from "./components/layouttester";

class App extends Component {
  state = {};
  render() {
    //this needs to go in its own class
    const alternative1 = { key: "plane", value: "Airplane" };
    const alternative2 = { key: "train", value: "Train" };
    const alternative3 = { key: "car", value: "Car" };
    const alternative4 = { key: "ecar", value: "Electric Car" };
    const alternatives = [
      alternative1,
      alternative2,
      alternative3,
      alternative4
    ];
    const question = {
      title: "Which mode of travel?",
      hours: true,
      alternatives: alternatives
    };
    const questions = [question];
    //this needs to go in its own class
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="border border-primary col-6">
              <Survey questions={questions} />
              {/*<LayoutTester />*/}
            </div>
            <div className="border border-primary col">
              <Plot />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
