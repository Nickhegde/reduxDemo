import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onIncrement, onDecrement } from "../../actions";
import "./counter.css";

export default function Counter(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <span>{count}</span>
      <button onClick={() => dispatch(onIncrement())}>+</button>
      <button onClick={() => dispatch(onDecrement())}>-</button>
    </div>
  );
}
