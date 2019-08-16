import React from "react";
import { Button } from "react-bootstrap";

const EditButton = props => {
  /** This generates the buttons in the View component, which is the list of previously entered trips etc. */
  const styles = {
    edit: "outline-info",
    delete: "outline-dark",
    include: "primary" //"outline-primary"
  };
  return (
    <label onClick={props.onclick}>
      <Button
        size="sm"
        variant={props.checked ? styles[props.type] : "outline-secondary"}
        id={props.id}
      >
        {props.type}
      </Button>
    </label>
  );
};

export default EditButton;
