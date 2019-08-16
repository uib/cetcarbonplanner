import React, { Component } from "react";

class FileImport extends Component {
  /**Ideas for parsing.
   * Check that it is a list.
   * Call all the dataset parameters and create new dataset objects. An error here is a parse failure.
   * Check no numbers are negative.
   * Check that they are valid carbon models? Perhaps not.
   */
  constructor(props) {
    super(props);
    this.state = { file: "" };
  }
  render() {
    return "";
  }
}

export default FileImport;
