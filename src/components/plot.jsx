import React, { Component } from "react";
import Chart from "chart.js";

class Plot extends Component {
  constructor(props) {
    //initialize the plot with pre-configured formatting
    super(props);
    this.state = {};
  }
  render() {
    //if the survey is complete, draw the plot. If during a survey, plot info pics etc.
    return <h4>A plot goes here</h4>;
  }
}

export default Plot;
