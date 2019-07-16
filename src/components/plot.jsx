import React, { Component } from "react";
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries
} from "react-vis";

class Plot extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.plot}</h4>
        {this.getPlot(this.props.plot)}
      </React.Fragment>
    );
  }

  getPlot(plot) {
    switch (plot) {
      default:
        return this.getTest();
    }
  }

  getTest() {
    const data = [
      { x: "Aircraft", y: Math.random() },
      { x: "A long data label", y: Math.random() },
      { x: "Electric Car", y: Math.random() },
      { x: "train", y: Math.random() }
    ];
    return (
      <FlexibleWidthXYPlot
        height={300}
        width={400}
        xType="ordinal"
        margin={{ bottom: 50 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} animation />
      </FlexibleWidthXYPlot>
    );
  }
}

export default Plot;
