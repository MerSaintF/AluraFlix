import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const InputArea = (props) => {
  const { dispatch, state } = useContext(GlobalContext);
  return (
    <div>
      <label htmlFor={props.id}>{props.fieldDescription}</label>
      <textarea
        required={props.required}
        value={state.formInfo[props.id]}
        id={props.id}
        rows={props.rows}
        placeholder={props.placeholder ?? ""}
        onChange={(event) => {
          dispatch({
            type: "ACTUALIZAR_FORM",
            payload: {
              id: props.id,
              value: event.target.value,
            },
          });
        }}
      ></textarea>
    </div>
  );
};

export default InputArea;
