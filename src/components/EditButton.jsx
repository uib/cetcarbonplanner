import React from "react";
import { Button } from "react-bootstrap";

const EditButton = props => {
  const styles = {
    edit: "outline-info",
    delete: "outline-dark",
    include: "outline-primary"
  };
  return (
    <label onClick={props.onclick}>
      <Button
        variant={props.checked ? styles[props.type] : "outline-secondary"}
        id={props.id}
      >
        {props.type}
      </Button>
    </label>
  );
};

export default EditButton;
