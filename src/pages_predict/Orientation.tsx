import React, {useState} from 'react';
import MainContentPage from './components/MainContent';
import ButtonFicheMetierPage from './components/ButtonFicheMetier';
import PopupFicheMetierPage from './components/PopupFicheMetier';
import ConseilVideoPage from './components/ConseilVideo';

export interface IOrientationsPageProps {};

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps> = (props) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleInterestClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const videoUrls = [
        "https://www.youtube.com/embed/UuGFfDbPjXA?si=d9S3Hm8iZC1UToUg",
        "https://www.youtube.com/embed/ZVK29042xQE?si=ktvlk9pO-FgvG1nn",
        "https://www.youtube.com/embed/byGwVMudvCI?si=jB5mD8Kn95EOw0Ty",
        "https://www.youtube.com/embed/GzroXDzzCSc?si=KOIni_QO9AKc7GSg",
        "https://www.youtube.com/embed/e4NHUBB6bos?si=kKzCMzhaI47NnIQJ",
        "https://www.youtube.com/embed/25HaTXYoj5E?si=KACZjccC2m6MH2wq",
        "https://www.youtube.com/embed/q6LZXh9y3uw?si=tHfK3xElJFw-Gfqt"
    ];

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
                    <div className='flex flex-col space-y-4'>
                        <div className='flex-1 overflow-y-auto'>
                            <ConseilVideoPage videoUrls={videoUrls}/>
                        </div>
                    </div>
                    <div className='jpo'></div>
                </div>
            </MainContentPage>
            {showPopup && <PopupFicheMetierPage onClose={handleClosePopup} />}
        </div>
    )
}

export default OrientationsPage;