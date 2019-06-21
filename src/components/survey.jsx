import React, { Component } from "react";
import Question from "./question";

class Survey extends Component {
  render() {
    const buttonclass = "btn btn-";
    return (
      <React.Fragment>
        <h4>Question:</h4>
        <br />
        <Question q={this.props.surveydata[0]} />
        <button className={buttonclass + "secondary"}>Previous</button>
        <button className={buttonclass + "primary w-25 ml-1"}>Next</button>
      </React.Fragment>
    );
  }
}

export default Survey;
