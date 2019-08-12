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

  mapPlotLabels() {
    return {
      "Electric car": "EV",
      Train: "Train",
      Bus: "Bus",
      Car: "Car",
      "Plane, regional": "Plane",
      Plane: "Plane",
      "Express boat": "Boat"
    };
  }

  getBaseObject() {
    return [
      { x: "EV", y: 0 },
      { x: "Train", y: 0 },
      { x: "Bus", y: 0 },
      { x: "Car", y: 0 },
      { x: "Plane", y: 0 },
      { x: "Boat", y: 0 }
    ];
  }

  calculateTotals(datalist) {
    const plotObjects = this.getBaseObject();
    const plotLabels = this.mapPlotLabels();
    for (const dataObj of datalist) {
      const label = plotLabels[dataObj.mode];
      const plotObj = plotObjects.find(o => o.x === label);
      plotObj.y += dataObj.quantity * this.props.model.model[dataObj.mode];
    }
    var sum = 0;
    for (const obj of plotObjects) {
      sum += obj.y;
    }
    sum = sum / 1000; //change from kg to tons
    return [plotObjects, sum];
  }

  render() {
    if (this.props.data) {
      const [plotObject, total] = this.calculateTotals(this.props.data);
      return (
        <div>
          <center>{total} tons CO2e emitted.</center>
          <small>Kg CO2e</small> {this.getTest(plotObject)}
        </div>
      );
    } else return "no data";
  }

  getDataSeries() {
    const inputdata = {
      "Car - electric": 5,
      Train: 3,
      Bus: 7,
      "Car - other": 0,
      "Plane - med./long": 0,
      "Plane - short dist.": 8,
      "Express boat": 0
    };
    const model = {
      "Car - electric": 1.5,
      Train: 3.1,
      Bus: 3.9,
      "Car - other": 5.6,
      "Plane - med./long": 110.5,
      "Plane - short dist.": 195.3,
      "Express boat": 32.1
    };
    const keys = Object.keys(inputdata);
    var returnString = "";
    for (const key of keys) {
      returnString += this.getDataLine(key, inputdata);
    }
    return <React.Component> {returnString}</React.Component>;
  }

  getColor(key) {
    const colors = ["green", "blue", "red", "green", "blue", "brown", "black"];
    return colors[key];
  }
  getDataLine(key, value) {
    const outputdata = [
      { x: "Car - electric", y: 0 },
      { x: "Train", y: 0 },
      { x: "Bus", y: 0 },
      { x: "Car - other", y: 0 },
      { x: "Plane - med./long", y: 0 },
      { x: "Plane - short dist.", y: 0 },
      { x: "Express boat", y: 0 }
    ];
    const obj = outputdata[key];
    outputdata[key] = { x: obj.x, y: value };
    return outputdata;
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
            key={1}
            data={this.getDataLine(0, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={2}
            data={this.getDataLine(1, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={3}
            data={this.getDataLine(2, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={4}
            data={this.getDataLine(3, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={5}
            data={this.getDataLine(4, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={6}
            data={this.getDataLine(5, Math.random())}
            labelsStyle={{ fontSize: 10 }}
            animation
          />
          <VerticalBarSeries
            key={7}
            data={this.getDataLine(6, Math.random())}
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

  getTest(data) {
    /*const data = [
      { x: "EV", y: Math.random() },
      { x: "Train", y: Math.random() },
      { x: "Bus", y: Math.random() },
      { x: "Car", y: Math.random() },
      { x: "Plane", y: Math.random() },
      { x: "Boat", y: Math.random() }
    ];*/
    return (
      <FlexibleWidthXYPlot
        labelsStyle={{
          fontSize: 9
        }}
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
