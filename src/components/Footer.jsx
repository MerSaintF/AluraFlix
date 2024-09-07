import React, { useContext } from "react";
import styled from "styled-components";
//import { GlobalContext } from "../contexts/GlobalContext";

const FooterContainer = styled.footer`
  background-color: #000000e5;
  display: flex;
  justify-content: center;

  img {
    max-height: 30px;
    padding: 20px 0;
  }
`;

const Footer = () => {
  //const { state, dispatch } = useContext(GlobalContext);
  // console.log(state);
  // console.log(dispatch);
  return (
    <FooterContainer>
      <img src="\images\logo.svg" alt="Logo" />
    </FooterContainer>
  );
};

export default Footer;
