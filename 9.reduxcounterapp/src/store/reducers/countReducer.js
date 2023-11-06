import { ACTIONS } from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  if (action.type === ACTIONS.ADD) {
    return state + 1;
  }
  if (action.type === ACTIONS.SUBTRACT) {
    return state - 1;
  }
  if (action.type === ACTIONS.RESET) {
    return (state = 0);
  }
  if (action.type === ACTIONS.ADDNUM) {
    return state + action.payload;
  }
  return state;
};

export default countReducer