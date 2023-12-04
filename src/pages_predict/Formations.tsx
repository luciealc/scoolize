import React from 'react';
import MainContentPage from './components/MainContent';

export interface IFormationsPageProps {};

const FormationsPage: React.FunctionComponent<IFormationsPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <h1>Formation</h1>
        </MainContentPage>
    </div>)
}

export default FormationsPage