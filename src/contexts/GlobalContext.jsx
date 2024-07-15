import React, { useReducer } from "react";
import { createContext, useState } from "react";
import { api, deleteData, postData } from "../api/api";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [needUpdate, setNeedUpdate] = useState(false);
  // const [img, setImg] = useState("");
  // const [video, setVideo] = useState("");
  // const [descripcion, setDescripcion] = useState("");
  // const [categoria, setCategoria] = useState("Back End");
  // const [guardar, setGuardar] = useState(true);
  // const [modificar, setModificar] = useState(false);

  const initialState = {
    categorias: [
      ["Back End", "#6BD1FF"],
      ["Front End", "#00C86F"],
      ["Innovación y Gestión", "#FFBA05"],
    ],
    videos: [],
    formInfo: {
      titulo: "",
      img: "",
      video: "",
      descripcion: "",
      categoria: "Back End",
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case "AGREGAR_CATEGORIA":
        return { ...state, categorias: [...categorias, action.payload] };
      case "LIMPIAR_FORM":
        return {
          ...state,
          formInfo: {
            titulo: "",
            img: "",
            video: "",
            descripcion: "",
            categoria: "Back End",
          },
        };
      case "ACTUALIZAR_FORM":
        // console.log(state);
        return {
          ...state,
          formInfo: {
            ...state.formInfo,
            [action.payload.id]: action.payload.value,
          },
        };
      case "POST_VIDEO":
        postData("/videos", { ...state.formInfo, id: uuid.v4() });
      case "DELETE_VIDEO":
        console.log(`/videos/${action.payload.id}`);
        deleteData(`/videos/${action.payload.id}`);
        setNeedUpdate(true);
      default:
        // console.log(state);
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, needUpdate, setNeedUpdate }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
