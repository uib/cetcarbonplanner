import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  state = { answers: [], nextQ: 0, name: "" };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
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
        datasetNumber={this.props.datasetNumber}
        plotFunction={this.props.plotFunction}
      />
    );
  }

  receiveAnswerFromQuestion(answer) {
    const updatedAnswers = [...this.state.answers];
    updatedAnswers[this.state.nextQ] = answer;
    this.props.plotFunction("test " + this.state.nextQ);
    this.setState({ answers: updatedAnswers, nextQ: this.state.nextQ + 1 });
  }

  defaultName() {
    return "Trip " + this.props.datasetNumber;
  }

  returnToMain() {
    this.props.reportAnswers(
      this.props.dataset,
      this.state.name === "" ? this.defaultName() : this.state.name,
      this.state.answers
    );
  }

  handleNameInput(event) {
    this.setState({ name: event.target.value });
  }

  reportComplete() {
    const style = "btn btn-outline-primary ";
    return (
      <React.Fragment>
        Enter a name for this trip (optional):
        <form onSubmit={this.returnToMain} onChange={this.handleNameInput}>
          <input type="text" name="name" placeholder={this.defaultName()} />
        </form>
        <button className={style} onClick={this.returnToMain}>
          Save trip
        </button>
      </React.Fragment>
    );
  }
}

export default Survey;
