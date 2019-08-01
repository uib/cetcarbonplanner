import React from "react";
import { Badge } from "react-bootstrap";

const EditButton = props => {
  const b = props.type === "edit";
  return (
    <label onClick={props.onclick}>
      <Badge pill variant={b ? "info" : "dark"} id={props.id}>
        {b ? "edit" : "delete"}
      </Badge>
    </label>
  );
};

export default EditButton;
