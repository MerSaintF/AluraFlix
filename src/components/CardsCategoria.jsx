import React, { useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../contexts/GlobalContext";

const CardsCategoria = (props) => {
  const { videos } = props;
  const cardsVideo = videos.map((Element) => {
    return (
      <Card
        infoVideo={Element}
        key={Element.id}
        colorseccion={props.colorseccion}
      ></Card>
    );
  });

  return <>{cardsVideo}</>;
};

export default CardsCategoria;
