import React from "react";
import { Route, Routes } from "react-router-dom";
import AccueilPage from "../pages_predict/Accueil";
import { IUser } from "../interface/user";

const AmbasRoutes: React.FC<IUser> = (props) => {
  return (
    <Routes>
      <Route path={"/"} element={<AccueilPage />} />
    </Routes>
  );
};

export default AmbasRoutes;
