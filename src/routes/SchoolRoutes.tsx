import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CandidaturesPage from "../page_prepare/Candidatures";
import GestionFormationPage from "../page_prepare/GestionFormation";
import MessageriePage from "../page_prepare/Messagerie";
import AccueilPage from "../page_prepare/Accueil";

import Navbar from "../components/NavBar/NavBar";
import { IUser } from "../interface/user";

// ... import other school pages

const SchoolRoutes: React.FC<IUser> = (props) => {
  return (
    <>
      <Navbar role={props.user.role} />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/candidatures" element={<CandidaturesPage />} />
        <Route path="/gestion-formations" element={<GestionFormationPage />} />
        <Route path="/messagerie-prepare" element={<MessageriePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default SchoolRoutes;
