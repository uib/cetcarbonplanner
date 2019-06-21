import React, { Component } from "react";

const InputForm = () => {
  return (
    <React.Fragment>
      <div>
        <label>
          <input type="radio" name="true" id="" value="true" />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input type="radio" name="true" id="" value="false" />
          <span>No</span>
        </label>
      </div>
    </React.Fragment>
  );
};

export default InputForm;
