import React from 'react';
import MainContentPage from './components/MainContent';

export interface IAccueilPageProps {};

const AccueilPage: React.FunctionComponent<IAccueilPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <h1>Accueil</h1>
        </MainContentPage>
    </div>)
}

export default AccueilPage