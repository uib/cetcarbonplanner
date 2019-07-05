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
      this.state.nextQ >= this.props.surveydata.questions.length
      ? this.reportComplete()
      : this.getQuestion();
  }

  getQuestion() {
    return (
      <Question
        q={this.props.surveydata.questions[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
      />
    );
  }

  receiveAnswerFromQuestion(answer) {
    const updatedData = [...this.state.dataset];
    updatedData.push(answer);
    this.setState({ dataset: updatedData, nextQ: this.state.nextQ + 1 });
    this.props.reportAnswers(this.state.dataset);
  }

  reportComplete() {
    return (
      <button onClick={this.props.returnToMainScreen}>
        Survey complete, return.
      </button>
    );
  }
}
export default Survey;
