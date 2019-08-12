import React from "react";
import { ResponsiveBar, Bar } from "nivo";

import data from "./data";
import config from "./config";

import "./chart.css";

class Chart extends React.Component {
  render() {
    const testdata = [{ mode: "Plane", co2: 45 }, { mode: "Car", co2: 5 }];
    return (
      <div className="chart">
        <ResponsiveBar
          data={testdata}
          keys={config.keys}
          indexBy="mode"
          margin={config.margin}
          padding={0.3}
          colors="nivo"
          colorBy="id"
          defs={config.defs}
          fill={config.fill}
          borderColor="inherit:darker(1.6)"
          axisTop={null}
          axisRight={null}
          axisBottom={config.axisBottom}
          axisLeft={config.axisLeft}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={config.legends}
        />
      </div>
    );
  }
  demo() {
    return (
      <div className="chart">
        <ResponsiveBar
          data={data}
          keys={config.keys}
          indexBy="country"
          margin={config.margin}
          padding={0.3}
          colors="nivo"
          colorBy="id"
          defs={config.defs}
          fill={config.fill}
          borderColor="inherit:darker(1.6)"
          axisTop={null}
          axisRight={null}
          axisBottom={config.axisBottom}
          axisLeft={config.axisLeft}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="inherit:darker(1.6)"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={config.legends}
        />
      </div>
    );
  }
}

export default Chart;
