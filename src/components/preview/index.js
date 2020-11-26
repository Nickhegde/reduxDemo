import React from "react";
import { useSelector } from "react-redux";

export default function Preview(props) {
  const count = useSelector((state) => state.counter);
  return (
    <div className="preview-container">
      <h3>Preview screen</h3>
      <div>{count}</div>
      <button onClick={props.onBack}>Back</button>
    </div>
  );
}
