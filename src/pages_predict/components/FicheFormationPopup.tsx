import React from 'react';
import MainContentPage from '../../components/MainContent';

export interface IFicheFormationPopupPageProps {
    onClose: () => void;
    children: React.ReactNode;
};

const FicheFormationPopupPage: React.FunctionComponent<IFicheFormationPopupPageProps>=({onClose, children})=>{
    return (<div>
        <MainContentPage>
            {/* Full-screen background with flexbox to center children */}
            <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
                {/* Popup width of 4/6 centered to the right */}
                <div className="w-4/6 ml-auto p-5 border-dark-blue shadow-lg bg-white mr-[90px]">
                    {/* Popup content */}
                    <div className="flex justify-between items-center pb-3">
                        <div className="cursor-pointer" onClick={onClose}>×</div>
                    </div>
                    {children}
                </div>
            </div>
        </MainContentPage>
    </div>)
}

export default FicheFormationPopupPage