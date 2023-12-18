import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FormationsPage from "../pages_predict/Formations";
import AccueilPage from "../pages_predict/Accueil";
import OrientationsPage from "../pages_predict/Orientation";
import VoeuxPage from "../pages_predict/Voeux";
import MessageriePage from "../pages_predict/Messagerie";
import ProfilPage from "../pages_predict/Profil";
import NavbarPage from "../pages_predict/components/navbar/Navbar";

const StudentRoutes = () => {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/orientation" element={<OrientationsPage />} />
        <Route path="/voeux" element={<VoeuxPage />} />
        <Route path="/messagerie" element={<MessageriePage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default StudentRoutes;
