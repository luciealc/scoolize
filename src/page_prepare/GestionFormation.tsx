import React from 'react';
import MainContentPage from './components/MainContent';

export interface IGestionFormationPageProps {};

const GestionFormationPage: React.FunctionComponent<IGestionFormationPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <h1>Gestion des Formations</h1>
        </MainContentPage>
    </div>)
}

export default GestionFormationPage