import React from 'react';
import MainContentPage from '../../components/MainContent';
import createChat from '../../functions/CreateChat';

export interface IFicheFormationPopupPageProps {
    onClose: () => void;
    selectedFormation: Formation | null;
    children: React.ReactNode;
};

interface Formation {
    id: string;
    contrat: string;
    ecole: string;
    formation: string;
    link: string;
    localisation: string;
    nb_places: number;
    resume: string;
    taux_acces: string;
    tags: string[];
    sid: string;
}

const FicheFormationPopupPage: React.FunctionComponent<IFicheFormationPopupPageProps> = ({ onClose, selectedFormation, children }) => {

    const handleChatButtonClick = async () => {
        if (selectedFormation) {
          await createChat(selectedFormation.sid, selectedFormation.ecole);
        }
        console.log('conversation created successfully');
    };

    return (<div>
        <MainContentPage>
            {/* Full-screen background with flexbox to center children */}
            <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
                {/* Popup width of 4/6 centered to the right */}
                <div className="w-4/6 ml-auto p-5 border-dark-blue shadow-lg bg-white mr-[90px]">
                    <div className="flex justify-between items-center pb-3">
                        <div className="cursor-pointer" onClick={onClose}>×</div>
                    </div>
                    {/* Popup content */}
                    {selectedFormation && (
                        <div>
                            <h1>{selectedFormation.ecole}</h1>
                            <h1>{selectedFormation.formation}</h1>
                            {/* Display other information about the selected formation */}
                            <button onClick={handleChatButtonClick} className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne">
                                Commencer une conversation
                            </button>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </MainContentPage>
    </div>)
}

export default FicheFormationPopupPage