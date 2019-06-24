import React, { Component } from "react";

class Question extends Component {
  state = { inputHours: 1 };
  constructor() {
    super();
    this.changeHours = this.changeHours.bind(this);
  }
  render() {
    const { q } = this.props;
    const alternatives = q.alternatives.map(a => (
      <div key={a.key}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            name="radiolist"
            type="radio"
            value={a.key}
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
        {q.hours && this.HourButtons(this.state.inputHours)}
      </React.Fragment>
    );
  }
  HourButtons() {
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
