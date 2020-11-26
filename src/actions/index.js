import { COUNTERS } from "./types";

export const onIncrement = () => {
  return {
    type: COUNTERS.INCREMENT_STATE,
    payload: 10,
  };
};

export const onDecrement = () => {
  return {
    type: COUNTERS.DECREMENT_STATE,
    payload: 5,
  };
};

export const onReset = () => {
  return {
    type: COUNTERS.RESET_STATE,
  };
};
