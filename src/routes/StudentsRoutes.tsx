import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FormationsPage from "../pages_predict/Formations";
import AccueilPage from "../pages_predict/Accueil";
import OrientationsPage from "../pages_predict/Orientation";
import VoeuxPage from "../pages_predict/Voeux";

import ProfilPage from "../pages_predict/Profil";

import Navbar from "../components/NavBar/NavBar";
import { IUser } from "../interface/user";

import Messagerie from "../screens/Messagerie/Messagerie";

const StudentRoutes: React.FC<IUser> = (props) => {
  return (
    <>
      <Navbar role={props.user.role} />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/orientation" element={<OrientationsPage />} />
        <Route path="/voeux" element={<VoeuxPage />} />
        <Route
          path="/messagerie"
          element={<Messagerie conv={props.user.conv} />}
        />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default StudentRoutes;
