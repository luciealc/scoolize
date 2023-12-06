import React from 'react';
import { Route, Routes} from "react-router-dom"
import Navbar from './pages_predict/components/navbar/Navbar'
import AccueilPage from "./pages_predict/Accueil"
import FormationsPage from './pages_predict/Formations';
import OrientationsPage from './pages_predict/Orientation';
import VoeuxPage from './pages_predict/Voeux';
import MessageriePage from './pages_predict/Messagerie';
import ProfilPage from './pages_predict/Profil';
// import NavbarPrepare from "./page_prepare/components/navbar/Navbar"
// import GestionFormationPage from './page_prepare/GestionFormation';
// import CandidaturesPage from './page_prepare/Candidatures';
// import AccueilPagePrepare from './page_prepare/Accueil';
// import MessageriePagePrepare from './page_prepare/Messagerie';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/orientation" element={<OrientationsPage />} />
        <Route path="/voeux" element={<VoeuxPage />} />
        <Route path="/messagerie" element={<MessageriePage />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<AccueilPagePrepare />} />
        <Route path="/candidatures" element={<CandidaturesPage />} />
        <Route path="/gestion-formations" element={<GestionFormationPage />} />
        <Route path="/messagerie-prepare" element={<MessageriePagePrepare />} />
      </Routes> */}
    </>
  );
}

export default App;
