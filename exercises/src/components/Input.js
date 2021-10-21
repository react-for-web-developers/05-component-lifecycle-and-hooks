import { useState, useRef } from "react";
const _ = require("lodash");

export default function Input({ filterDigimons }) {
  const [level, setLevel] = useState("");
  const setServicesValueDebounced = useRef(_.debounce(filterDigimons, 500));

  function handleOnChange({ target: { value } }) {
    setLevel(value);
    setServicesValueDebounced.current(value);
  }

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Filter Digimon by level</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="email"
              placeholder="Level"
              value={level}
              onChange={handleOnChange}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
