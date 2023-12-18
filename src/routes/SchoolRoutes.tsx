import React from "react";
import { Routes, Route } from "react-router-dom";
import CandidaturesPage from "../page_prepare/Candidatures";
import GestionFormationPage from "../page_prepare/GestionFormation";
import MessageriePage from "../page_prepare/Messagerie";
import AccueilPage from "../page_prepare/Accueil";
import NavbarPage from "../page_prepare/components/navbar/Navbar";

// ... import other school pages

const SchoolRoutes = () => {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/candidatures" element={<CandidaturesPage />} />
        <Route path="/gestion-formations" element={<GestionFormationPage />} />
        <Route path="/messagerie-prepare" element={<MessageriePage />} />
      </Routes>
    </>
  );
};

export default SchoolRoutes;
