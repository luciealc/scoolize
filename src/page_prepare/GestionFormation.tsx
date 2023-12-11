import React from 'react';
import MainContentPage from './components/MainContent';
import SearchBarPage from './components/SearchBar';
import FormationFilterPage from './components/FilterFormation';
import ButtonFormationPage from './components/ButtonFormation';

export interface IGestionFormationPageProps {};

const GestionFormationPage: React.FunctionComponent<IGestionFormationPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <div className='container mx-auto p-4'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0'>
                    <SearchBarPage />
                    <FormationFilterPage />
                    <ButtonFormationPage />
                </div>
            </div>
        </MainContentPage>
    </div>)
}

export default GestionFormationPage