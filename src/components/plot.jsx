import React, { Component } from "react";

class Plot extends Component {
  render() {
    return this.getPlot(this.props.plot);
  }

  getPlot(plot) {
    switch (plot) {
      default:
        return <h4>{plot}</h4>;
    }
  }
}

export default Plot;
