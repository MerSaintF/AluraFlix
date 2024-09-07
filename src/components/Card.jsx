import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 200px;
  width: 300px;
  border: 5px solid ${(props) => props.colorseccion};
  border-radius: 15px;
  overflow: hidden;
`;

const CardImg = styled.a`
  display: block; /* Ensures the anchor behaves like a block element */
  height: 75%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 25%;
  width: 100%;
  background-color: #000000;
  img {
    width: 23px;
    height: 25px;
  }
`;

const Card = (props) => {
  const { infoVideo, colorseccion } = props;
  return (
    <CardContainer colorseccion={colorseccion}>
      <CardImg href={infoVideo.video} target="_blank" rel="noopener noreferrer">
        <img src={infoVideo.img} alt="Video Thumbnail"></img>
      </CardImg>
      <CardInfo>
        <img
          data-id={infoVideo.id}
          data-action="delete"
          src="/images/delete.png"
          title="Eliminar video"
          alt="Delete"
        ></img>
        <img
          data-id={infoVideo.id}
          data-action="edit"
          src="/images/edit.png"
          title="Editar video"
          alt="Edit"
        ></img>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
