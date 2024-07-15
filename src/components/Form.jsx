import React, { useContext } from "react";
import styled from "styled-components";
import InputText from "../components/InputText";
import InputArea from "../components/InputArea";
import Button from "../components/Button";
import { GlobalContext } from "../contexts/GlobalContext";
import InputSelect from "../components/InputSelect";

const FormInputs = styled.div`
  max-width: 700px;
  width: 80%;
  margin: 0 50px;
  div {
    display: flex;
    flex-direction: column;
  }
  .Botones {
    gap: 10px;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-evenly;
  }
  input,
  select,
  option,
  textarea {
    color: white;
    padding: 10px 20px;
    border: 1px solid white;
    background-color: #00000000;
    border-radius: 10px;
  }
  textarea {
    resize: none;
  }
  label {
    margin-top: 30px;
    margin-bottom: 10px;
    border: none;
  }
  select option {
    background-color: #03122f;
  }
`;

const Form = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <FormInputs>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("aqui haces el post");

          if (state.modal) {
            dispatch({ type: "PUT_VIDEO" });
            dispatch({ type: "LIMPIAR_FORM" });
            dispatch({ type: "TOGGLE_MODAL" });
          } else {
            dispatch({ type: "POST_VIDEO", payload: state.formInfo });
            dispatch({ type: "LIMPIAR_FORM" });
          }
        }}
      >
        <InputText
          required
          type="text"
          fieldDescription="Título"
          id="titulo"
          placeholder="Ingresa el título"
        ></InputText>

        <InputText
          required
          type="url"
          fieldDescription="Imagen"
          id="img"
          placeholder="Ingresa el enlace de la imagen del video"
        ></InputText>

        <InputText
          required
          type="url"
          fieldDescription="Video"
          id="video"
          placeholder="Ingresa el enlace del video"
        ></InputText>

        <InputArea
          required
          rows="4"
          fieldDescription="Descripción del video"
          id="descripcion"
          placeholder="Ingresa descripción del video"
        ></InputArea>

        <InputSelect
          required
          id="categoria"
          fieldDescription="Selecciona una categoría"
          options={state.categorias}
        ></InputSelect>

        <div className="Botones">
          <Button
            type="button"
            text="Limpiar"
            fcnClick={() => {
              //console.log(state.formInfo);
              dispatch({ type: "LIMPIAR_FORM" });
            }}
          ></Button>
          <Button type="submit" text="Guardar"></Button>
        </div>
      </form>
    </FormInputs>
  );
};

export default Form;
