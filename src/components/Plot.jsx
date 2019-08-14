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
  getPlotLabelMap(type) {
    if (type === "trip") {
      return {
        "Electric car": "EV",
        Train: "Train",
        Bus: "Bus",
        Car: "Car",
        "Plane, regional": "Plane",
        "Plane, international": "Plane",
        "Express boat": "Boat"
      };
    } else {
      return {
        "Short distance <45 min": "Short",
        "Scandinavia 45 min - 2 hrs": "Scandinavia",
        "Europe 2-4 hrs": "Europe",
        "Rest of world 4-12 hrs": "World"
      };
    }
  }

  getPlotObject(type) {
    //the data object forming the basis of the trip plot
    if (type === "trip") {
      return [
        { x: "EV", y: 0 },
        { x: "Train", y: 0 },
        { x: "Bus", y: 0 },
        { x: "Car", y: 0 },
        { x: "Plane", y: 0 },
        { x: "Boat", y: 0 }
      ];
    } else {
      return [
        { x: "Short", y: 0 },
        { x: "Scandinavia", y: 0 },
        { x: "Europe", y: 0 },
        { x: "World", y: 0 }
      ];
    }
  }

  getModel(type) {
    const { model } = this.props.model;
    if (type === "trip") {
      return model;
    } else {
      return {
        "Short distance <45 min": model["Plane, regional"],
        "Scandinavia 45 min - 2 hrs": 2 * model["Plane, international"],
        "Europe 2-4 hrs": 6 * model["Plane, international"],
        "Rest of world 4-12 hrs": 16 * model["Plane, international"]
      };
    }
  }

  calculateTotals(datalist) {
    const { type } = this.props;
    const model = this.getModel(type);
    const plotObject = this.getPlotObject(type);
    const plotLabelMap = this.getPlotLabelMap(type);
    for (const dataObj of datalist) {
      const label = plotLabelMap[dataObj.mode];
      const plotObj = plotObject.find(o => o.x === label);
      plotObj.y += dataObj.quantity * model[dataObj.mode];
    }
    var sum = 0;
    for (const obj of plotObject) {
      sum += obj.y;
    }
    sum = sum / 1000; //change from kg to tons
    return [plotObject, sum];
  }

  render() {
    if (this.props.data && this.props.type) {
      const [plotObject, total] = this.calculateTotals(this.props.data);
      const percent = ((total / this.props.limit) * 100).toFixed();
      return (
        <div>
          <b>
            Total emissions: {total.toFixed(2)} tons CO2e emitted.
            <br />
            {this.props.limit !== 0 &&
              percent +
                "% of target for " +
                this.props.type +
                "s (" +
                this.props.limit +
                " tons CO2e)."}
          </b>
          <br />
          <small>Kg CO2e</small>
          {this.getPlot(plotObject)}
        </div>
      );
    } else return ""; //no valid data to plot
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
    return this.getPlot(data);
  }

  getPlot(data) {
    return (
      <FlexibleWidthXYPlot
        labelsStyle={{
          fontSize: 9
        }}
        height={400}
        width={420}
        xType="ordinal"
        margin={{ left: 70, bottom: 50 }}
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
