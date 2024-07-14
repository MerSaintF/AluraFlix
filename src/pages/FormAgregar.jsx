import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import InputText from "../components/InputText";
import InputArea from "../components/InputArea";
import Button from "../components/Button";
import { GlobalContext } from "../contexts/GlobalContext";
import InputSelect from "../components/InputSelect";

const FormSection = styled.section`
  padding: 50px 0px;
  background-color: #03122f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.div`
  padding: 20px 30px;
  text-align: center;
  font-size: 2rem;
  p {
    padding-top: 30px;
    font-size: 1rem;
  }
`;

const FormInputs = styled.form`
  max-width: 700px;
  width: 80%;
  margin: 0 50px;
  div {
    display: flex;
    flex-direction: column;
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

const FormAgregar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <FormSection>
      <Titulo>
        <h2>NUEVO VIDEO</h2>
        <p>COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </Titulo>
      <FormInputs>
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

        <Button
          type="button"
          text="Limpiar"
          fcn={() => {
            console.log(state.formInfo);
            dispatch({ type: "LIMPIAR_FORM" });
          }}
        ></Button>

        <Button type="submit" text="Guardar"></Button>
      </FormInputs>
    </FormSection>
  );
};

export default FormAgregar;
