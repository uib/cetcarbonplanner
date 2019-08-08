import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  state = { answers: [], nextQ: 0, name: "" };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  render() {
    return this.state.nextQ >= this.props.surveydata.questions.length
      ? this.surveyComplete()
      : this.getQuestion();
  }

  previousQuestion() {
    this.setState({ nextQ: this.state.nextQ - 1 });
  }

  getQuestion() {
    return (
      <Question
        //during edited survey, previous answers should be passed here
        cancel={this.cancel}
        key={"Q" + this.state.nextQ + ":" + this.props.dataset.UUID}
        q={this.props.surveydata.questions[this.state.nextQ]}
        reportAnswerToSurvey={this.receiveAnswerFromQuestion}
        previousQuestion={this.previousQuestion}
        previousAnswer={
          this.state.answers[this.state.nextQ] ||
          this.props.dataset.answers[this.state.nextQ]
        }
        isLastQ={
          this.state.nextQ === this.props.surveydata.questions.length - 1
        }
        isFirstQ={this.state.nextQ === 0}
        plotFunction={this.props.plotFunction}
        defaultName={this.props.defaultName}
      />
    );
  }

  receiveAnswerFromQuestion(answer, type) {
    const updatedAnswers = [...this.state.answers];
    updatedAnswers[this.state.nextQ] = answer;
    const answerObj = { answers: updatedAnswers, nextQ: this.state.nextQ + 1 };
    if (type === "name") {
      answerObj.name = answer;
    }
    this.setState(answerObj);
  }

  returnToMain() {
    this.props.reportAnswers(
      this.props.dataset,
      this.state.name,
      this.state.answers
    );
  }

  cancel() {
    this.props.reportAnswers(); //called with no parameters will cause nothing to be saved
  }

  surveyComplete() {
    const style = "btn btn-outline-primary ";
    return (
      <React.Fragment>
        Trip summary: CO2 such and such.
        <button className={style} onClick={this.returnToMain}>
          Save trip
        </button>
        <button className={style} onClick={this.cancel}>
          Cancel
        </button>
      </React.Fragment>
    );
  }
}

export default Survey;
