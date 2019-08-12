import React from "react";
import { Button } from "react-bootstrap";

const EditButton = props => {
  const styles = {
    edit: "outline-info",
    delete: "outline-dark",
    plot: "outline-primary"
  };
  return (
    <label onClick={props.onclick}>
      <Button variant={styles[props.type]} id={props.id}>
        {props.type}
      </Button>
    </label>
  );
};

export default EditButton;
