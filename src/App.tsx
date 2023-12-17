import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./pages_predict/components/navbar/Navbar";
import AccueilPage from "./pages_predict/Accueil";
import FormationsPage from "./pages_predict/Formations";
import OrientationsPage from "./pages_predict/Orientation";
import VoeuxPage from "./pages_predict/Voeux";
import MessageriePage from "./pages_predict/Messagerie";
import ProfilPage from "./pages_predict/Profil";
import LoginPage from "./auth/Login";
import { auth, firestore } from "./auth/firebaseConfig";
import RegisterPage from "./auth/Register";
import { doc, getDoc } from "firebase/firestore";
import NavbarPrepare from "./page_prepare/components/navbar/Navbar";
import GestionFormationPage from "./page_prepare/GestionFormation";
import CandidaturesPage from "./page_prepare/Candidatures";
import AccueilPagePrepare from "./page_prepare/Accueil";
import MessageriePagePrepare from "./page_prepare/Messagerie";

function App() {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        // Optionally fetch additional user data here
      } else {
        // User is signed out
        setUser(null);

        navigate("/login"); // Redirect to login page


      }
    });
    return () => unsubscribe();
  }, [navigate]);
  const conditionalRender = () => {
    console.log(role);

    if (role === "student") {
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

            <Route path="*" element={!user && <Navigate to="/login" />} />




          </Routes>
        </>
      );
    } else if (role === "school") {
      console.log(!user);

      return (
        <>
          <NavbarPrepare />
          <Routes>
            <Route path="/" element={<AccueilPagePrepare />} />
            <Route path="/candidatures" element={<CandidaturesPage />} />
            <Route
              path="/gestion-formations"
              element={<GestionFormationPage />}
            />
            <Route
              path="/messagerie-prepare"
              element={<MessageriePagePrepare />}
            />
            <Route path="*" element={!user && <Navigate to="/login" />} />
          </Routes>
        </>
      );
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const fetchData = async () => {
          const docSnap = await getDoc(doc(firestore, "users", user.uid));
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data.account.role);

            setRole(data.account.role);
            console.log("Document data:", docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        };

        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);

        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  console.log(process.env.OPENAI_API_KEY);
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

      {user && conditionalRender()}
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <RegisterPage />}
        />
      </Routes>

      {/* Les autres routes de l'application */}


    </>
  );
}

export default App;
