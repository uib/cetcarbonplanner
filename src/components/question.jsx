import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnswerTable from "./answertable";

class Question extends Component {
  state = { inputHours: 1, selected: null, answers: [], isEditing: false };
  constructor() {
    super();
    this.changeHours = this.changeHours.bind(this);
    this.saveListDataPoint = this.saveListDataPoint.bind(this);
    this.radioSelect = this.radioSelect.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  //denne må ta i mot isEditing en gang, og så oppdatere answers + flippe isEditing.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedState:", nextProps, prevState);
    if (nextProps.previousAnswer === undefined || prevState.isEditing) {
      return null;
    } else {
      if (nextProps.q.list) {
        return {
          answers: nextProps.previousAnswer,
          isEditing: true
        };
      } else {
        return {
          selected: nextProps.previousAnswer,
          isEditing: true
        };
      }
    }
  }

  render() {
    console.log("answers:", this.state.answers);
    const { q } = this.props;
    const alternatives = q.alternatives.map(a => (
      <div key={a.key}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            value={a.key}
            checked={this.state.selected === a.key}
            onChange={this.radioSelect}
          />
          {a.value}
        </label>
      </div>
    ));
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={7}>
              <p>{q.title}</p>
              <form>
                <div className="form-check">{alternatives}</div>
              </form>
              {q.list && this.hourButtons()}
              {this.buttonRow()}
            </Col>
            <Col>
              {q.list && this.state.answers.length > 0 && (
                <AnswerTable answers={this.state.answers} />
              )}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  radioSelect(event) {
    event.persist();
    this.setState({ selected: event.target.value });
  }

  saveListDataPoint() {
    const answerlist = [...this.state.answers];
    answerlist.push(this.getAnswerObject());
    this.setState({ answers: answerlist });
  }

  getAnswerObject() {
    //used for tuple objects such as (transport mode,transport hours)
    if (this.props.q.list) {
      let mode = this.state.selected;
      let hour = this.state.inputHours;
      return { mode, hour };
    } else {
      return this.state.selected;
    }
  }

  buttonRow() {
    const style = "btn btn-outline-secondary ";
    return (
      <div>
        {/*Previous Button*/}
        <button
          className={style}
          onClick={this.props.previousQuestion}
          disabled={this.props.isFirstQ}
        >
          Previous
        </button>
        {/*Add Button*/}
        {this.props.q.list && (
          <button
            className={style}
            onClick={this.saveListDataPoint}
            disabled={!this.state.selected}
          >
            Add
          </button>
        )}
        {/*Submit Button*/}
        <button
          className={style}
          onClick={this.submitAnswer}
          disabled={
            /*Submit button should be disabled on a list question if no
            answers have been added yet. On a regular question it should be disabled if
            nothing is selected.
            */
            (this.props.q.list && this.state.answers.length === 0) ||
            (!this.props.q.list && !this.state.selected)
          }
        >
          Submit
        </button>
      </div>
    );
  }

  submitAnswer() {
    const answer = this.props.q.list ? this.state.answers : this.state.selected;
    this.setState({ selected: null, answers: [], isEditing: false });
    this.props.reportAnswerToSurvey(answer);
  }

  hourButtons() {
    const style = "btn btn-outline-secondary ";
    const hrs = this.state.inputHours;
    return (
      <div>
        Travel time:
        <br />
        <button className={style} onClick={this.decHours}>
          -
        </button>
        <button className={style + "w-25"}>
          {hrs + " hour" + (hrs > 1 ? "s" : "")}
        </button>
        <button className={style} onClick={this.incHours}>
          +
        </button>
      </div>
    );
  }

  incHours = () => {
    this.changeHours(1);
  };

  decHours = () => {
    this.changeHours(-1);
  };

  changeHours(change) {
    const hrs = this.state.inputHours + change;
    if (hrs > 0) {
      this.setState({
        inputHours: hrs
      });
    }
  }
}

export default Question;
