import React from 'react';
import MainContentPage from '../components/MainContent';
import NavbarPage from '../components/navbar/Navbar';
import MenueProfil from '../Profil/menue/menue';
import ChampsModif from '../components/ChampsModifiable/Champs';

export interface IProfilPageProps {};

const ProfilPage: React.FunctionComponent<IProfilPageProps> = (props) => {
  return (
    <div>
      <MainContentPage>
        <NavbarPage />
        <div className="flex flex-col items-center pt-4">
          <MenueProfil />

          <div className="flex w-full justify-around mt-4">
            <section className="w-full max-w-2xl">
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
            </section>

            <section className="w-1/3 mt-4">
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
              <ChampsModif />
            </section>
          </div>
        </div>
      </MainContentPage>
    </div>
  );
};

export default ProfilPage;
