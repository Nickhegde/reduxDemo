import React from "react";
import { useDispatch } from "react-redux";
import { onReset } from "../../actions";
import "./buttonGrp.css";

export default function ButtonGrp(props) {
  const dispatch = useDispatch();
  return (
    <div className="button-grp-container">
      <button onClick={() => dispatch(onReset())}>Reset</button>
      <button onClick={props.onPreview}>Preview</button>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}
