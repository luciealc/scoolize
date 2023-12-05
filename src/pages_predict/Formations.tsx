// import React from 'react';
// import MainContentPage from './components/MainContent';
// import SearchBarPage from './components/SearchBar';
// import FormationFilterPage from './components/FormationFilter';

// export interface IFormationsPageProps {};

// const FormationsPage: React.FunctionComponent<IFormationsPageProps>=(props)=>{
//     return (<div>
//         <MainContentPage>
//             <h1>Formation</h1>
//             <div className='main-div'>
//                 <div className='col1'>
//                     <div className='row1'>
//                         <SearchBarPage />
//                     </div>
//                     <div className='row2'></div>
//                 </div>
//                 <div className='col2'>
//                     <div className='row1'>
//                         <FormationFilterPage />
//                     </div>
//                     <div className='row2'></div>
//                 </div>
//             </div>
//         </MainContentPage>
//     </div>)
// }

// export default FormationsPage


import React from 'react';
import MainContentPage from './components/MainContent';
import SearchBarPage from './components/SearchBar';
import FormationFilterPage from './components/FormationFilter';
import CardFormationPage from './components/CardFormation';
import MapFormationPage from './components/MapFormation';

export interface IFormationsPageProps { };

const FormationsPage: React.FunctionComponent<IFormationsPageProps> = (props) => {
    return (
        <MainContentPage>
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                    <SearchBarPage />
                    <FormationFilterPage />
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full lg:w-1/2 px-2 mb-4">
                        {/* Place the cards component here */}
                        <CardFormationPage />
                    </div>
                    <div className="w-full lg:w-1/2 px-2">
                        {/* Place the map component here */}
                        <MapFormationPage />
                    </div>
                </div>
            </div>
        </MainContentPage>
    );
}

export default FormationsPage;
