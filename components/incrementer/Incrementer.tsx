import { useState, useEffect } from 'react';

const Incrementer = () => {
  const [increment, setIncrement] = useState(1);
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + increment);
  };
  const reset = () => {
    setNumber(0);
  };
  return (
    <div className="w-96 m-4 border-solid border-2 border-primary rounded-lg">
      <div className="mt-1 dropdown dropdown-hover dropdown-right ">
        <label tabIndex={0} className="btn m-1">
          Change Increment (+{increment}) ▼
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-40"
        >
          <li>
            <a
              onClick={() => {
                setIncrement(1);
              }}
            >
              +1
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIncrement(2);
              }}
            >
              +2
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIncrement(5);
              }}
            >
              +5
            </a>
          </li>
        </ul>
      </div>
      <div className="m-4 w-16 flex flex-row">
        <div className="tooltip" data-tip="Click to increment">
          <button
            className="w-16 btn btn-primary hover:btn-secondary"
            onClick={add}
          >
            {number}
          </button>
        </div>
        <button
          className="w-16 ml-4 btn btn-primary hover:btn-error"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <progress
        className="progress progress-accent w-56 align-center"
        value={number}
        max="100"
      ></progress>
    </div>
  );
};
export default Incrementer;
