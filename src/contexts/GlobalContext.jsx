import React, { useReducer } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("Back End");
  const [guardar, setGuardar] = useState(true);
  const [modificar, setModificar] = useState(false);

  const initialState = {
    categorias: ["Back End", "Front End", "Innovación y Gestión"],
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
        console.log(state);
        return {
          ...state,
          formInfo: {
            ...state.formInfo,
            [action.payload.id]: action.payload.value,
          },
        };
      default:
        console.log(state);
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
