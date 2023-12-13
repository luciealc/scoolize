import React, {useState} from 'react';
import MainContentPage from './components/MainContent';
import ButtonFicheMetierPage from './components/ButtonFicheMetier';
import PopupFicheMetierPage from './components/PopupFicheMetier';

export interface IOrientationsPageProps {};

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps> = (props) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleInterestClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <MainContentPage>
                <div className="flex overflow-x-auto no-scrollbar space-x-4 mt-[50px] ml-[60px] mr-[55px]">
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick}/>
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick}/>
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick}/>
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick}/>
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick}/>
                </div>
                <div>
                    <div className='videos'>
                        <h1>Conseils Vidéo</h1>
                    </div>
                    <div className='jpo'></div>
                </div>
            </MainContentPage>
            {showPopup && <PopupFicheMetierPage onClose={handleClosePopup} />}
        </div>
    )
}

export default OrientationsPage;