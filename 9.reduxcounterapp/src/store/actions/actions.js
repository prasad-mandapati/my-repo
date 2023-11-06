import { ACTIONS } from "./actionTypes";

export const handleAuth = () => {
  return{
    type: ACTIONS.TOGGLE,
  };
};

export const handleAdd = () => {
  return{
    type: ACTIONS.ADD,
  }
};

export const handleSub = () => {
  return{
    type: ACTIONS.SUBTRACT,
  }
};

export const handleReset = () => {
  return({
    type: ACTIONS.RESET,
  });
};

export const handleAddNumber = (num) => {
  return{
    type: ACTIONS.ADDNUM,
    payload: num,
  };
};
