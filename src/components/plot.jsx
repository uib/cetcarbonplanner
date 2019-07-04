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
    return this.getPlot(this.props.plot);
  }

  getPlot(plot) {
    switch (plot) {
      case "test":
        return this.getTest();
      default:
        return <h4>{plot}</h4>;
    }
  }

  getTest() {
    const data = [
      { x: "Aircraft", y: 8 },
      { x: "A long data label", y: 15 },
      { x: "Electric Car", y: 4 },
      { x: "train", y: 9 }
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
        <VerticalBarSeries data={data} />
      </FlexibleWidthXYPlot>
    );
  }
}

export default Plot;
