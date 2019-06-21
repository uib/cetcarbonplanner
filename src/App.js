import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Survey from "./components/survey";
import Plot from "./components/plot";
import NavBar from "./components/navbar";
import Question from "./components/question";

class App extends Component {
  state = {};
  render() {
    const surveydata = [{ id: 1, text: "Hello, how are you doing?" }];
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Survey surveydata={surveydata} />
            </div>
            <div className="col">
              <Plot />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
