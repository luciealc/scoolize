import React from 'react';
import MainContentPage from './components/MainContent';

export interface IMessageriePageProps {};

const MessageriePage: React.FunctionComponent<IMessageriePageProps>=(props)=>{
    return (<div>
        <MainContentPage>
            <h1>Messagerie Prepare</h1>
        </MainContentPage>
    </div>)
}

export default MessageriePage