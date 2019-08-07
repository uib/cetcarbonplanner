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
    if (this.props.data === "test") {
      return "test";
    } else {
      return this.plot(this.createPlottableArray(this.props.data));
    }
  }

  createPlottableArray(obj) {
    const keys = Object.keys(obj);
    const plotArray = [];
    for (const mode of keys) {
      plotArray.push({ x: mode, y: obj[mode] });
    }
    return plotArray;
  }

  plot(data) {
    if (!data) {
      return "No data";
    }
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
