import { ACTIONS } from "../actions/actionTypes";

const authReducer = (state = false, action) => {
  if (action.type === ACTIONS.TOGGLE) {
    return (state = !state);
  }
  return state;
};

export default authReducer;