import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { GlobalContext } from "../contexts/GlobalContext";
import SeccionCategoria from "../components/SeccionCategoria";
import { getData } from "../api/api";
import Modal from "../components/Modal";
const Home = () => {
  const { state, dispatch, videos, setVideos } = useContext(GlobalContext);
  const categorias = [...state.categorias];
  

  const HandleEvents = function (e) {
    if (e.target.dataset.action == "delete") {
      const id = e.target.dataset.id;
      dispatch({ type: "DELETE_VIDEO", payload: { id: id } });
      const filtrados = videos.filter((video) => video.id !== id);
      console.log(id);
      console.log("videos", videos);
      console.log(filtrados);
      setVideos([...filtrados]);
    }

    if (e.target.dataset.action == "edit") {
      const id = e.target.dataset.id;
      dispatch({ type: "TOGGLE_MODAL", payload: { id: id } });
    }
  };



  const secciones = categorias.map((elem, index) => {
    const videosCat = videos.filter((video) => video.categoria == elem[0]);

    return (
      <SeccionCategoria
        key={index}
        nombreSeccion={elem[0]}
        colorseccion={elem[1]}
        videos={videosCat}
      ></SeccionCategoria>
    );
  });

  return (
    <div onClick={HandleEvents}>
      <Banner></Banner>
      {secciones}

      {state.modal && <Modal></Modal>}
    </div>
  );
};

export default Home;
