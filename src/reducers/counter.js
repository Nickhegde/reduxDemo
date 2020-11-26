import { INITIAL_STATE } from "./initialState";
import { COUNTERS } from "../actions/types";

const counter = (state = INITIAL_STATE.count, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTERS.INCREMENT_STATE:
      return state + payload;
    case COUNTERS.DECREMENT_STATE:
      return state - payload;
    case COUNTERS.RESET_STATE:
      return 0;
    default:
      return state;
  }
};

export default counter;
