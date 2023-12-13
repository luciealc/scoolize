import React from 'react';

export interface IPopupFicheMetierPageProps {
    onClose: () => void;
};

const PopupFicheMetierPage: React.FunctionComponent<IPopupFicheMetierPageProps>=({onClose})=>{
    return (<div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded">
                <h2>Popup Content Here</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>)
}

export default PopupFicheMetierPage