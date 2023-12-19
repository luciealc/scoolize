import React from "react";
import { Route, Routes } from "react-router-dom";
import AccueilPage from "../pages_predict/Accueil";
import Messagerie from "../screens/Messagerie/Messagerie";

const AmbasRoutes: React.FC = (props) => {
  return (
    <Routes>
      <Route path={"/"} element={<AccueilPage />} />
      <Route path={"/message"} element={<Messagerie />} />
    </Routes>
  );
};

export default AmbasRoutes;
