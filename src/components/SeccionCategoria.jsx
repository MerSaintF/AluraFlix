import React from "react";
import styled from "styled-components";
import CardsCategoria from "./CardsCategoria";

const SeccionStyled = styled.section`
  padding: 0px 80px;
  position: relative;
  background-color: #000000;
  height: 400px;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const TituloCategoria = styled.div`
  h3 {
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    background-color: ${(props) => props.colorseccion || "red"};
    padding: 20px 30px;
    position: absolute;
    left: 80px;
    top: -30px;
  }
`;

const SeccionCategoria = (props) => {
  return (
    <SeccionStyled>
      <TituloCategoria colorseccion={props.colorseccion}>
        <h3>{props.nombreSeccion.toUpperCase()}</h3>
      </TituloCategoria>
      <CardsCategoria
        colorseccion={props.colorseccion}
        categoria={props.nombreSeccion}
        videos={props.videos}
      ></CardsCategoria>
    </SeccionStyled>
  );
};

export default SeccionCategoria;
