import React from 'react';
import Navbar from './pages_predict/components/navbar/Navbar'
import { Route, Routes} from "react-router-dom"
import AccueilPage from "./pages_predict/Accueil"
import FormationsPage from './pages_predict/Formations';
import OrientationsPage from './pages_predict/Orientation';
import VoeuxPage from './pages_predict/Voeux';
import MessageriePage from './pages_predict/Messagerie';
import ProfilPage from './pages_predict/Profil';

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
    </>
  );
}

export default App;
