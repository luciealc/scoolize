import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes} from "react-router-dom"
import Navbar from './pages_predict/components/navbar/Navbar'
import AccueilPage from "./pages_predict/Accueil"
import FormationsPage from './pages_predict/Formations';
import OrientationsPage from './pages_predict/Orientation';
import VoeuxPage from './pages_predict/components/Voeux';
import MessageriePage from './pages_predict/Messagerie';
import ProfilPage from './pages_predict/Profil/Profil';
import LoginPage from './auth/Login';
import { auth } from './auth/firebaseConfig';
import RegisterPage from './auth/Register';
// import NavbarPrepare from "./page_prepare/components/navbar/Navbar"
// import GestionFormationPage from './page_prepare/GestionFormation';
// import CandidaturesPage from './page_prepare/Candidatures';
// import AccueilPagePrepare from './page_prepare/Accueil';
// import MessageriePagePrepare from './page_prepare/Messagerie';

function App() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });
  
    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  
  return (
    <>
            
      {/* // <Routes>
      //   <Route path="/" element={<AccueilPage />} />
      //   <Route path="/formations" element={<FormationsPage />} />
      //   <Route path="/orientation" element={<OrientationsPage />} />
      //   <Route path="/voeux" element={<VoeuxPage />} />
      //   <Route path="/messagerie" element={<MessageriePage />} />
      //   <Route path="/profil" element={<ProfilPage />} />
      // </Routes>):(<LoginPage />) */}
      {user && <Navbar/>}
      <Routes>
        {/* Redirige vers la page d'accueil si l'utilisateur est authentifié */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
        {/* Les autres routes de l'application */}
        {user && (
          <>
          
            <Route path="/" element={<AccueilPage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/orientation" element={<OrientationsPage />} />
            <Route path="/voeux" element={<VoeuxPage />} />
            <Route path="/messagerie" element={<MessageriePage />} />
            <Route path="/profil" element={<ProfilPage />} />
          </>
        )}

        {/* Redirige vers la page de connexion si l'utilisateur n'est pas authentifié */}
        <Route path="/" element={<ProfilPage />} />
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
