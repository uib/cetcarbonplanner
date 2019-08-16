import React, { Component } from "react";
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries
} from "react-vis";
/**This component plots the column diagram. It also performs the calculation and conversion to the data type required by
 * the React-Vis chart library. Since each chart library typically requires their own type,
 * I thought it was best to keep it all in here. React-Vis requires the following data object structure:
 *  [
        { x: "EV", y: 0 },
        { x: "Train", y: 0 },
        { x: "Bus", y: 0 },
        { x: "Car", y: 0 },
        { x: "Plane", y: 0 },
        { x: "Boat", y: 0 }
      ];
 * A list of objects where each object has two keys, x and y, defining the data point in two dimensions.
 */
class Plot extends Component {
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

  calculateTotals(datalist) {
    const { type } = this.props;
    const model = this.getModel(type);
    const plotLabelMap = this.getPlotLabelMap(type);
    const plotObject = this.getPlotObject(Object.values(plotLabelMap));
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
  getPlotLabelMap(type) {
    /**This is where you define what the labels in the survey data should map to in the plotted data.
     */
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
    } else if (type === "meeting") {
      return {
        "Short distance <45 min": "Short",
        "Scandinavia 45 min - 2 hrs": "Scandinavia",
        "Europe 2-4 hrs": "Europe",
        "Rest of world 4-12 hrs": "World"
      };
    }
  }

  getPlotObject(labels) {
    /**Generates the data object forming the basis of the plot. A label in this context is a text string which will appear
     * in the chart Since multiple inputs can map to the same output, such as international and regional plane both
     * mapping to Plane, it checks if a label has already been added in an additional object. This costs a little more memory,
     * but is fast and easy to read in the code.
     *
     * It adds all the labels already defined in getPlotMap, so it doesn't need to know the type (trip, meeting etc).
     */
    const plotObject = [];
    const alreadyAdded = {};
    for (const label of labels) {
      if (alreadyAdded[label]) {
        continue;
      } else {
        plotObject.push({ x: label, y: 0 });
        alreadyAdded[label] = true;
      }
    }
    return plotObject;
  }

  getModel(type) {
    /**If you add a new data registration category beyond trips and meetings, define how the model maps to it here. If it uses
     * the carbon model "straight from the can", you can just add it as an OR clause in the first branch.
     */

    const { model } = this.props.model;
    if (type === "trip") {
      return model;
    } else if (type === "meeting") {
      return {
        "Short distance <45 min": model["Plane, regional"],
        "Scandinavia 45 min - 2 hrs": 2 * model["Plane, international"],
        "Europe 2-4 hrs": 6 * model["Plane, international"],
        "Rest of world 4-12 hrs": 16 * model["Plane, international"]
      };
    }
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
