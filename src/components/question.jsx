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
    console.log(this.state.answer);
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

  getInputForm() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTextInput}
          //placeholder={this.props.q.name && this.props.defaultName}
        />
      </React.Fragment>
    );
  }

  getRadioSelectList() {
    if (this.props.q.quantifier) {
      return "";
    } else {
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
  }

  render() {
    const { q } = this.props;
    const answerInput = q.alternatives
      ? this.getRadioSelectList()
      : this.getInputForm();
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={7}>
              <p>{q.text}</p>
              {answerInput}
              {q.quantifier && this.quantityButtons()}
              {this.buttonRow()}
            </Col>
            <Col>
              {q.list && this.state.answerlist.length > 0 && (
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
    answerlist.push(this.getAnswerObject());
    this.setState({ answerlist: answerlist });
  }

  getAnswerObject() {
    //used for tuple objects such as (transport mode,transport hours)
    if (this.props.q.list) {
      let mode = this.state.answer;
      let amount = this.state.quantity;
      return { mode, amount };
    } else if (this.props.q.quantifier) {
      return this.state.quantity;
    } else {
      return this.state.answer;
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
            !//negate sign used here to make parameters more sensible, since the value true leads to a disabled button.
            (
              (this.props.q.quantifier && !this.props.q.list) ||
              (this.props.q.list && this.state.answerlist.length > 0) ||
              (!this.props.q.list && this.state.answer.length > 0)
            )
          }
        >
          Submit
        </button>
        <button className={style} onClick={this.props.cancel}>
          Cancel
        </button>
      </div>
    );
  }

  submitAnswer() {
    const answer = this.props.q.list
      ? this.state.answerlist
      : this.state.answer;
    this.setState({ answer: null, answerlist: [] });
    this.props.reportAnswerToSurvey(answer, this.props.q.name);
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
