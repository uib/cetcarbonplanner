import React from "react";
import { Badge } from "react-bootstrap";

const EditButton = props => {
  const styles = { edit: "info", delete: "dark", plot: "info" };
  return (
    <label onClick={props.onclick}>
      <Badge pill variant={styles[props.type]} id={props.id}>
        {props.type}
      </Badge>
    </label>
  );
};

export default EditButton;
