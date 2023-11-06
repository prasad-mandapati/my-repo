import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, ADD_NUMBER, SUBTRACT, RESET } from "../store/slices/counterSlice";
import { AUTH_TOGGLE } from "../store/slices/authSlice";
// import { handleAdd, handleAddNumber, handleReset, handleSub, handleAuth } from "../store/actions/actions";


const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  console.log(isLogged)

  return (
    <div className="--100vh --bg-dark --flex-center">
      <div className="--width-500px --card --bg-light --p2 --m2">
        <div className="--center-all">
          <button className="--btn --btn-lg --btn-danger" onClick={() => dispatch(AUTH_TOGGLE())}>
            {!isLogged ? "Open" : "Close"}
          </button>
        </div>
        {!isLogged ? (
          <p className="--text-center --m">Please Click On Open</p>
        ) : (
          <article>
            <h1 className="--text-md --text-center">React Counter App</h1>
            <div className="--text-center">
              <span
                className={
                  counter > 0
                    ? "--text-lg --color-primary"
                    : counter < 0
                    ? "--text-lg --color-danger"
                    : "--text-lg"
                }
              >
                {counter}
              </span>
            </div>
            <div className="buttons --flex-center --mt">
              <button
                className="--btn --btn-lg --btn-danger"
                onClick={() => dispatch(SUBTRACT())}
              >
                Subtract
              </button>
              <button
                className="--btn --btn-lg --btn-grey"
                onClick={() => dispatch(RESET())}
              >
                Reset
              </button>
              <button
                className="--btn --btn-lg --btn-primary"
                onClick={() => dispatch(ADD())}
              >
                Add
              </button>
              <button
                className="--btn --btn-lg --btn-primary"
                onClick={() => dispatch(ADD_NUMBER(5))}
              >
                Add5
              </button>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default Counter;
