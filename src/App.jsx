import { useContext, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import FormAgregar from "./pages/FormAgregar.jsx";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalContextProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agregar-video" element={<FormAgregar />} />
          </Routes>
          <Footer></Footer>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;
