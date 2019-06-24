import React, { Component } from "react";

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
        <p>{q.title}</p>
        <form>
          <div className="form-check">{alternatives}</div>
        </form>
        {q.hours && this.hourButtons()}
        {this.saveButtons()}
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
    var answerlist = [...this.state.answers];
    answerlist.push({ mode, hour });
    this.setState({ answers: answerlist });
  }

  saveButtons() {
    const style = "btn btn-outline-secondary " + "w-25";
    return (
      <div>
        <button
          className={style}
          onClick={this.saveDataPoint}
          disabled={!this.state.selected}
        >
          Save and Add New
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
