import React from 'react';
import MainContentPage from './components/MainContent';
import voeux from "../assets/images/voeux frame.svg"

export interface IVoeuxPageProps {};

const VoeuxPage: React.FunctionComponent<IVoeuxPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <img src={voeux} alt="Predict" className="h-[811px] w-[1114px]" />
        </MainContentPage>
    </div>)
}

export default VoeuxPage