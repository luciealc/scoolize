import React from 'react';
import MainContentPage from './components/MainContent';

export interface ICandidaturesPageProps {};

const CandidaturesPage: React.FunctionComponent<ICandidaturesPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <h1>Candidatures</h1>
        </MainContentPage>
    </div>)
}

export default CandidaturesPage