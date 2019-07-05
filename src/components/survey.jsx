import React, { Component } from "react";
import Question from "./statefulquestion";

class Survey extends Component {
  state = { dataset: [], nextQ: 0, finished: false };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
  }
  render() {
    return this.state.finished ||
      this.state.nextQ >= this.props.surveydata.length
      ? this.reportComplete()
      : this.getQuestion();
  }

  reportComplete() {
    return (
      <button onClick={this.props.returnToMainScreen}>
        Survey complete, return.
      </button>
    );
  }

  getQuestion() {
    /*  
    return <FunctionalQuestion q={this.props.surveydata[this.state.nextQ]} />;
    */
    return (
      <Question
        q={this.props.surveydata[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
      />
    );
  }

  receiveAnswerFromQuestion(answer) {
    const updatedData = [...this.state.dataset];
    updatedData.push(answer);
    this.setState({ dataset: updatedData, nextQ: this.state.nextQ + 1 });
    this.props.reportAnswers(this.state.dataset);
    //reportDataSet?
    //saveTemporaryDataSet?
  }
}

export default Survey;
