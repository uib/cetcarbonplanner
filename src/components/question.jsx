import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnswerTable from "./answertable";

class Question extends Component {
  state = { quantity: 1, answer: "", answerlist: [] };
  constructor() {
    super();
    this.changeHours = this.changeAmount.bind(this);
    this.saveListDataPoint = this.saveListDataPoint.bind(this);
    this.radioSelect = this.radioSelect.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.deleteFromAnswerList = this.deleteFromAnswerList.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  componentDidMount() {
    if (this.props.previousAnswer !== undefined) {
      if (this.props.q.list) {
        this.setState({ answerlist: this.props.previousAnswer });
      } else if (this.props.q.quantifier) {
        this.setState({ quantity: this.props.previousAnswer });
      } else {
        this.setState({ answer: this.props.previousAnswer });
      }
    }
  }

  deleteFromAnswerList(id) {
    const newAnswerList = [...this.state.answerlist];
    newAnswerList.splice(id, 1);
    this.setState({ answerlist: newAnswerList });
  }

  getInputForm(type) {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTextInput}
          placeholder={type === "name" ? this.props.defaultName : ""}
        />
      </React.Fragment>
    );
  }

  getRadioSelectList() {
    return (
      <form>
        <div className="form-check">
          {this.props.q.alternatives.map(a => (
            <div key={a}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  value={a}
                  checked={this.state.answer === a}
                  onChange={this.radioSelect}
                />
                {a}
              </label>
            </div>
          ))}
        </div>
      </form>
    );
  }

  render() {
    const { q } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={7}>
              <p>{q.text}</p>
              {q.type === "name" && this.getInputForm(q.type)}
              {(q.type === "select" || q.type === "quantityselect") &&
                this.getRadioSelectList()}
              {(q.type === "quantity" || q.type === "quantityselect") &&
                this.quantityButtons()}
              {this.buttonRow(q.type)}
            </Col>
            <Col>
              {q.type === "quantityselect" &&
                this.state.answerlist.length > 0 && (
                  <AnswerTable
                    answerlist={this.state.answerlist}
                    deleteFunction={this.deleteFromAnswerList}
                  />
                )}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  handleTextInput(event) {
    this.setState({ answer: event.target.value });
  }

  radioSelect(event) {
    event.persist();
    this.setState({ answer: event.target.value });
  }

  saveListDataPoint() {
    const answerlist = [...this.state.answerlist];
    answerlist.push({ mode: this.state.answer, quantity: this.state.quantity });
    this.setState({ answerlist: answerlist });
  }

  getAnswer(type) {
    switch (type) {
      case "quantityselect":
        return this.state.answerlist;
      case "quantity":
        return this.state.quantity;
      default:
        return this.state.answer;
    }
  }

  buttonRow(questionType) {
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
        {questionType === "quantityselect" && (
          <button
            className={style}
            onClick={this.saveListDataPoint}
            disabled={!this.state.answer}
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
            answerlist have been added yet. On a regular question it should be disabled if
            nothing is selected, but on a simple quantity question it is enabled all the time, as the default answer is valid.
            */
            !/*negate sign used here to make parameters more sensible and to return on the first true, 
            since the value true leads to a disabled button.*/
            (
              questionType === "name" ||
              questionType === "quantity" ||
              (questionType === "quantityselect" &&
                this.state.answerlist.length > 0) ||
              (questionType !== "quantityselect" &&
                this.state.answer.length > 0)
            )
          }
        >
          Next
        </button>
        <button className={style} onClick={this.props.cancel}>
          Cancel
        </button>
      </div>
    );
  }

  submitAnswer() {
    this.setState({ answer: null, answerlist: [] });
    this.props.reportAnswerToSurvey(
      this.getAnswer(this.props.q.type),
      this.props.q.type
    );
  }

  quantityButtons() {
    const style = "btn btn-outline-secondary ";
    const quantity = this.state.quantity;
    return (
      <div>
        {this.props.q.quantifier}:
        <br />
        <button className={style} onClick={this.decrease}>
          -
        </button>
        <button className={style + "w-25"}>{quantity}</button>
        <button className={style} onClick={this.increase}>
          +
        </button>
      </div>
    );
  }

  increase = () => {
    this.changeAmount(1);
  };

  decrease = () => {
    this.changeAmount(-1);
  };

  changeAmount(change) {
    const q = this.state.quantity + change;
    if (q > 0) {
      this.setState({
        quantity: q
      });
    }
  }
}

export default Question;
