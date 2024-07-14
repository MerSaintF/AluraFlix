import React, { useContext } from "react";
import Banner from "../components/Banner";
import { GlobalContext } from "../contexts/GlobalContext";

const Home = () => {

  // const { state, dispatch } = useContext(GlobalContext);
  // dispatch({ type: "AGREGAR_CATEGORIA", payload: "NewCategory" });
  // console.log(state.categorias);
  return (
    //insertar componente banner
    <Banner></Banner>
    //hacer map de las distintas categorías
    //en categorías, hacer map de los distintos videos de las categorías
  );
};

export default Home;
