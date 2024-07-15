import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: #00000000;
  border: 1px solid white;
  border-radius: 8px;
  padding: 13px 60px;
  box-shadow: 0px 0px 8px 4px #ffffff7c inset;

  &:active {
    color: #2271d1;
    background-color: black;
    border: 1px solid var(--Blue, #2271d1);
    box-shadow: 0px 0px 4px 4px #2271d17c inset;
  }
`;

const Button = (props) => {

  return (
    <StyledBoton type={props.type} onClick={props.fcnClick}>
      {props.text}
    </StyledBoton>
  );
};

export default Button;
