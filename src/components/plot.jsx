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
  constructor() {
    super();
    this.modelcolors = this.illustrationPlot();
  }
  render() {
    return this.illustrationPlot();
  }

  illustrationPlot() {
    const colors = {
      "Car - electric": 1.5,
      Train: 3.1,
      Bus: 3.9,
      "Car - other": 5.6,
      "Plane - med./long": 110.5,
      "Plane - short dist.": 195.3,
      "Express boat": 32.1
    };
    const data = [
      { x: "Car - electric", y: 0.026 },
      { x: "Train", y: 0.044 },
      { x: "Bus", y: 0.065 },
      { x: "Car - other", y: 0.094 },
      { x: "Plane - med./long", y: 0.13 },
      { x: "Plane - short dist.", y: 0.279 },
      { x: "Express boat", y: 0.803 }
    ];
    return (
      <React.Fragment>
        Emissions per mode of transport (kg CO2e / passenger / km)
        <FlexibleWidthXYPlot
          height={500}
          width={400}
          xType="ordinal"
          margin={{ bottom: 50 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis style={{ text: { fontSize: 9 } }} />
          <YAxis />
          <VerticalBarSeries
            data={data}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
        </FlexibleWidthXYPlot>
      </React.Fragment>
    );
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
