import React, { Component } from "react";
import StatefulQuestion from "./statefulquestion";
import FunctionalQuestion from "./functionalquestion";
import { Container, Row, Col } from "react-bootstrap";
import Plot from "./plot";

class Survey extends Component {
  state = { dataset: [], nextQ: 0, finished: false };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
  }
  render() {
    return (
      <Row>
        <Col sm={12} md={7} className="border border-secondary">
          {this.state.finished
            ? this.returnToMainScreen()
            : this.state.nextQ >= this.props.surveydata.length
            ? this.reportComplete()
            : this.getQuestion()}
        </Col>
        <Col className="border border-secondary">
          <Plot />
        </Col>
      </Row>
    );
  }

  returnToMainScreen() {
    return <h4>this is the main screen</h4>;
  }

  reportComplete() {
    return (
      <button onClick={this.props.returnFunction()}>
        Survey complete, return.
      </button>
    );
  }

  getQuestion() {
    /*  
    return <FunctionalQuestion q={this.props.surveydata[this.state.nextQ]} />;
    */
    return (
      <StatefulQuestion
        q={this.props.surveydata[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
      />
    );
  }

  reportDataSet() {
    this.props.reportAnswers();
  }

  receiveAnswerFromQuestion(answer) {
    const updatedData = [...this.state.dataset];
    updatedData.push(answer);
    this.setState({ dataset: updatedData, nextQ: this.state.nextQ + 1 });
    //reportDataSet?
    //saveTemporaryDataSet?
  }
}

export default Survey;
