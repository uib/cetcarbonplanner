import React, { Component } from "react";
import StatefulQuestion from "./statefulquestion";
import FunctionalQuestion from "./functionalquestion";

class Survey extends Component {
  state = { dataset: [], nextQ: 0 };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        {this.state.nextQ >= this.props.surveydata.length
          ? this.reportComplete()
          : this.getQuestion()}
      </React.Fragment>
    );
  }

  reportComplete() {
    return (
      <button onClick={() => this.setState({ dataset: [], nextQ: 0 })}>
        Survey complete, reset.
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
