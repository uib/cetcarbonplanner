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
  mapPlotLabels() {
    return {
      "Electric car": "EV",
      Train: "Train",
      Bus: "Bus",
      Car: "Car",
      "Plane, regional": "Plane",
      "Plane, international": "Plane",
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

  convertMeetingDatalist(datalist) {
    const { model } = this.props.model;
    const travelFactors = {
      "Short distance <45 min": { factor: 1, mode: "Plane, regional" },
      "Scandinavia 45 min - 2 hrs": { factor: 2, mode: "Plane, international" },
      "Europe 2-4 hrs": { factor: 6, mode: "Plane, international" },
      "Rest of world 4-12 hrs": { factor: 16, mode: "Plane, international" }
    };
    const newList = datalist.map(obj => ({
      mode: travelFactors[obj.mode].mode,
      quantity:
        travelFactors[obj.mode].factor * model[travelFactors[obj.mode].mode]
    }));
    return newList;
  }

  calculateTotals(datalistParameter) {
    const datalist =
      this.props.type === "meeting"
        ? this.convertMeetingDatalist(datalistParameter)
        : datalistParameter;
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
          <center>{total.toFixed(2)} tons CO2e emitted.</center>
          <small>Kg CO2e</small> {this.getTest(plotObject)}
        </div>
      );
    } else return "no data";
  }

  illustrationPlot() {
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
          height={600}
          width={600}
          xType="ordinal"
          margin={{ left: 100, bottom: 50 }}
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

  getTest(data) {
    return (
      <FlexibleWidthXYPlot
        labelsStyle={{
          fontSize: 9
        }}
        height={400}
        width={400}
        xType="ordinal"
        margin={{ left: 50, bottom: 50 }}
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
