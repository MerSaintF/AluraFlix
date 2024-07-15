import React, { useContext, useState } from "react";
import Form from "./Form";
import { GlobalContext } from "../contexts/GlobalContext";
import styled from "styled-components";

const ModalStyled = styled.div`
  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(158, 158, 158, 0.496);
  }

  .close-modal {
    width:30px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 0px;
  background-color: #03122f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #6bd1ff;
  border-radius: 15px;
  h2 {
    font-size: 2rem;
  }
`;

export default function Modal() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <>
      <ModalStyled>
        <div className="modal">
          <div className="overlay"></div>
          <ModalContent>
            <h2>EDITAR VIDEO</h2>
            <Form></Form>
            <img
            title="Cerrar"
              src="src\assets\images\close.png"
              className="close-modal"
              onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
            ></img>
          </ModalContent>
        </div>
      </ModalStyled>
    </>
  );
}
