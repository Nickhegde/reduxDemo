import React from "react";
import { useSelector } from "react-redux";

export default function Submit(props) {
  const count = useSelector((state) => state.counter);
  return (
    <div className="submit-container">
      <h3>Submit screen</h3>
      <div>{count}</div>
      <button onClick={props.onBack}>Back</button>
    </div>
  );
}
