import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  state = { answers: [], nextQ: 0 };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
  }
  render() {
    return this.state.nextQ >= this.props.surveydata.questions.length
      ? this.reportComplete()
      : this.getQuestion();
  }

  getQuestion() {
    return (
      <Question
        //during edited survey, previous answers should be passed here
        q={this.props.surveydata.questions[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
      />
    );
  }

  receiveAnswerFromQuestion(answer) {
    const updatedAnswers = [...this.state.answers];
    updatedAnswers.push(answer);
    this.setState({ answers: updatedAnswers, nextQ: this.state.nextQ + 1 });
    this.props.reportAnswers(
      this.state,
      this.props.dataset,
      this.state.nextQ >= this.props.surveydata.questions.length //boolean value that says if the survey is finished
    );
    this.props.plotFunction("test " + this.state.nextQ);
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
