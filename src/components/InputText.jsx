import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const InputText = (props) => {
  const { dispatch, state } = useContext(GlobalContext);
  return (
    <div>
      <label htmlFor={props.id}>{props.fieldDescription}</label>
      <input
        required={props.required}
        value={state.formInfo[props.id]}
        type={props.type ?? "text"}
        id={props.id}
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
      ></input>
    </div>
  );
};

export default InputText;
