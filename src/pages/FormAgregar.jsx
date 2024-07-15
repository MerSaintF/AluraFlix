import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Form from "../components/Form";

const FormSection = styled.section`
  padding: 50px 0px;
  background-color: #03122f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.div`
  padding: 20px 30px;
  text-align: center;
  //font-size: 2rem;
  p {
    padding-top: 30px;
    font-size: 1rem;
  }
`;

const FormAgregar = () => {
  return (
    <FormSection>
      <Titulo>
        <h2>NUEVO VIDEO</h2>
        <p>COMPLETA EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </Titulo>
      <Form></Form>
    </FormSection>
  );
};

export default FormAgregar;
