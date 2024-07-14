import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const InputSelect = (props) => {
  const { options } = props;

  const { dispatch, state } = useContext(GlobalContext);
  return (
    <div>
      <label htmlFor={props.id}>{props.fieldDescription}</label>
      <select
        required={props.required}
        id={props.id}
        value={state.formInfo[props.id]}
        onChange={(event) => {
          dispatch({
            type: "ACTUALIZAR_FORM",
            payload: {
              id: props.id,
              value: event.target.value,
            },
          });
        }}
      >
        {options.map((Element, idx) => {
          return (
            <option key={idx} value={Element}>
              {Element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputSelect;
