import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  state = { answers: [], nextQ: 0 };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }
  render() {
    return this.state.nextQ >= this.props.surveydata.questions.length
      ? this.reportComplete()
      : this.getQuestion();
  }

  previousQuestion() {
    this.setState({ nextQ: this.state.nextQ - 1 });
  }

  getQuestion() {
    return (
      <Question
        //during edited survey, previous answers should be passed here
        key={"Q" + this.state.nextQ + ":" + this.props.dataset.UUID}
        q={this.props.surveydata.questions[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
        previousQuestion={this.previousQuestion}
        previousAnswer={this.state.answers[this.state.nextQ]}
        isLastQ={
          this.state.nextQ === this.props.surveydata.questions.length - 1
        }
        isFirstQ={this.state.nextQ === 0}
        plotFunction={this.props.plotFunction}
      />
    );
  }

  receiveAnswerFromQuestion(answer) {
    const updatedAnswers = [...this.state.answers];
    updatedAnswers[this.state.nextQ] = answer;
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
      <button onClick={this.props.navigate("home")}>
        Survey complete, return.
      </button>
    );
  }
}
export default Survey;
