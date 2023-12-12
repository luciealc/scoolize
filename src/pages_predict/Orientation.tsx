import React from 'react';
import MainContentPage from './components/MainContent';
import ButtonFicheMetierPage from './components/ButtonFicheMetier';

export interface IOrientationsPageProps {};

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <ButtonFicheMetierPage></ButtonFicheMetierPage>
        </MainContentPage>
    </div>)
}

export default OrientationsPage