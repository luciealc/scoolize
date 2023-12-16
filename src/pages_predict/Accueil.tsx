import React from 'react';
import MainContentPage from './components/MainContent';
import NavbarPage from '../pages_predict/components/navbar/Navbar'
import SearchBarPage from '../pages_predict/components/SearchBar'
import Banneracc from '../../src/pages_predict/components/BannerAccueil/banneracc'
import CandidatureCard from '../pages_predict/components/cardCandidature/cardCandidature'
import FavorisCard from '../pages_predict/components/cardFavoris/cardfav'
import SearchBarPage1 from '../pages_predict/components/SearchBarcopy'
import SuggestionsCard from '../pages_predict/components/cardFavoris copy/cardfav'

export interface IAccueilPageProps { };

const AccueilPage: React.FunctionComponent<IAccueilPageProps> = (props) => {
    return (<div>
        <MainContentPage>
            <NavbarPage />
            <Banneracc />
            <SearchBarPage1 />
            <SuggestionsCard/>
            <div className="flex justify-end space-x-8">
                <div className="flex flex-col items-end space-y-[34px]">
                    <CandidatureCard />
                    <FavorisCard />
                </div>
            </div>
            
        </MainContentPage>
    </div>)
}

export default AccueilPage