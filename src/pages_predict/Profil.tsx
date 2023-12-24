import React from "react";
import MainContentPage from "../components/MainContent";

export interface IProfilPageProps {}

const ProfilPage: React.FunctionComponent<IProfilPageProps> = (props) => {
  return (
    <div>
      <MainContentPage>
        <h1>Profil</h1>
      </MainContentPage>
    </div>
  );
};

export default ProfilPage;
