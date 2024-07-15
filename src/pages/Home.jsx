import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { GlobalContext } from "../contexts/GlobalContext";
import SeccionCategoria from "../components/SeccionCategoria";
import { getData } from "../api/api";
const Home = () => {
  const { state, dispatch, needUpdate, setNeedUpdate } =
    useContext(GlobalContext);
  const categorias = [...state.categorias];
  const [videos, setVideos] = useState([]);

  const HandleEvents = function (e) {
    if (e.target.dataset.action == "delete") {
      const id = e.target.dataset.id;
      dispatch({ type: "DELETE_VIDEO", payload: { id: id } });
    }
  };

  useEffect(() => {
    if (needUpdate) {
      getData("/videos").then((res) => {
        setVideos(res);
        setNeedUpdate(false);
      });
    }
  }, [needUpdate]);

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
    </div>
  );
};

export default Home;
