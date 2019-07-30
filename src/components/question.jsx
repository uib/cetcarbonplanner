import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnswerTable from "./answertable";
import carbonmodel from "./carbonmodel";

class Question extends Component {
  state = { quantity: 1, selected: null, answerlist: [] };
  constructor() {
    super();
    this.changeHours = this.changeAmount.bind(this);
    this.saveListDataPoint = this.saveListDataPoint.bind(this);
    this.radioSelect = this.radioSelect.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  componentDidMount() {
    if (this.props.previousAnswer !== undefined) {
      if (this.props.q.list) {
        this.setState({ answerlist: this.props.previousAnswer });
      } else {
        this.setState({ selected: this.props.previousAnswer });
      }
    }
  }

  getTitleQuestion() {
    return (
      <React.Fragment>
        <div>Please enter a name for this trip:</div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }

  render() {
    const { q } = this.props;
    const alternatives = q.alternatives.map(a => (
      <div key={a}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            value={a}
            checked={this.state.selected === a}
            onChange={this.radioSelect}
          />
          {a}
        </label>
      </div>
    ));
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={7}>
              <p>{q.text}</p>
              <form>
                <div className="form-check">{alternatives}</div>
              </form>
              {q.list && this.quantityButtons()}
              {this.buttonRow()}
            </Col>
            <Col>
              {q.list && this.state.answerlist.length > 0 && (
                <AnswerTable answerlist={this.state.answerlist} />
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
    const answerlist = [...this.state.answerlist];
    answerlist.push(this.getAnswerObject());
    this.setState({ answerlist: answerlist });
  }

  getAnswerObject() {
    //used for tuple objects such as (transport mode,transport hours)
    if (this.props.q.list) {
      let mode = this.state.selected;
      let amount = this.state.quantity;
      return { mode, amount };
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
            answerlist have been added yet. On a regular question it should be disabled if
            nothing is selected.
            */
            (this.props.q.list && this.state.answerlist.length === 0) ||
            (!this.props.q.list && !this.state.selected)
          }
        >
          Submit
        </button>
      </div>
    );
  }

  submitAnswer() {
    const answer = this.props.q.list
      ? this.state.answerlist
      : this.state.selected;
    this.setState({ selected: null, answerlist: [], isEditing: false });
    this.props.reportAnswerToSurvey(answer);
  }

  quantityButtons() {
    const style = "btn btn-outline-secondary ";
    const quantity = this.state.quantity;
    return (
      <div>
        Travel time ({this.props.q.quantifier}):
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
