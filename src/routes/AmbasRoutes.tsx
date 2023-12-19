import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AccueilPage from "../pages_predict/Accueil";
import Messagerie from "../screens/Messagerie/Messagerie";
import Navbar from "../components/NavBar/NavBar";

const AmbasRoutes: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<AccueilPage />} />
        <Route path={"/messagerie"} element={<Messagerie />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default AmbasRoutes;
