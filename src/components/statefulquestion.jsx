import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnswerTable from "./answertable";

class Question extends Component {
  state = { inputHours: 1, selected: null, answers: [] };
  constructor() {
    super();
    this.changeHours = this.changeHours.bind(this);
    this.saveDataPoint = this.saveDataPoint.bind(this);
    this.radioSelect = this.radioSelect.bind(this);
  }
  render() {
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
              {q.hours && this.hourButtons()}
              {this.saveButtons()}
            </Col>
            <Col>
              {q.hours && this.state.answers.length > 0 && (
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

  saveDataPoint() {
    const hour = this.state.inputHours;
    const mode = this.state.selected;
    const answerlist = [...this.state.answers];
    answerlist.push({ mode, hour });
    this.setState({ answers: answerlist });
  }

  saveButtons() {
    const style = "btn btn-outline-secondary ";
    return (
      <div>
        <button
          className={style}
          onClick={this.saveDataPoint}
          disabled={!this.state.selected}
        >
          Save and Add New
        </button>
        <button
          className={style}
          onClick={() => this.props.reportAnswerToSurvey(this.state.answers)}
          disabled={!this.state.answers.length > 0}
        >
          Done
        </button>
      </div>
    );
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
