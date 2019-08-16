import React, { Component } from "react";
import Question from "./Question";

class Survey extends Component {
  state = { answers: [], nextQ: 0, name: "", key: "", plot: undefined };
  constructor() {
    super();
    this.receiveAnswerFromQuestion = this.receiveAnswerFromQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.returnToMain = this.returnToMain.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  /*The lifecycle functions on mount and update are to make sure state is reset properly if the user
  cancels a registration process by clicking on the top menu, for instance jumping to Organize Meeting mid-Plan Trip */
  componentDidMount() {
    this.setState({ key: this.props.dataset.UUID });
  }

  componentDidUpdate() {
    if (this.props.dataset.UUID !== this.state.key) {
      this.setState({
        answers: [],
        nextQ: 0,
        name: "",
        key: this.props.dataset.UUID
      });
    }
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
        //During edited survey, previous answers should be passed here
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
      answerObj.name = answer === "" ? this.props.defaultName : answer;
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
    //this works by calling the report function with no parameters, which will cause nothing to be saved.
    this.props.reportAnswers();
  }

  surveyComplete() {
    return (
      <React.Fragment>
        <p>Click to save data. View CO2 charts on Summary page.</p>
        <button className={"btn btn-primary "} onClick={this.returnToMain}>
          Save data
        </button>
        <button className={"btn btn-outline-primary "} onClick={this.cancel}>
          Cancel
        </button>
      </React.Fragment>
    );
  }
}

export default Survey;
