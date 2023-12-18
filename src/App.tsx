import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, firestore } from "./auth/firebaseConfig";

import { doc, getDoc } from "firebase/firestore";
import StudentRoutes from "./routes/StudentsRoutes";
import SchoolRoutes from "./routes/SchoolRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     if (currentUser) {
  //       // User is signed in
  //       setUser(currentUser);
  //       // Optionally fetch additional user data here
  //     } else {
  //       // User is signed out
  //       setUser(null);

  //       // navigate("/login"); // Redirect to login page
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const fetchData = async () => {
          const docSnap = await getDoc(doc(firestore, "users", user.uid));
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUser(data);

            setRole(data.role);
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
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);
  return (
    <>
      {user ? (
        role === "student" ? (
          <StudentRoutes user={user} />
        ) : (
          <SchoolRoutes />
        )
      ) : (
        <PublicRoutes />
      )}
    </>
  );
}

export default App;
