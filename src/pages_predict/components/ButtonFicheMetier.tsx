import React from 'react';
import FicheMetier from '../../assets/icons/fichemetier.svg'

export interface IButtonFicheMetierPageProps { };

const ButtonFicheMetierPage: React.FunctionComponent<IButtonFicheMetierPageProps> = (props) => {
    return (<div>
        <div className="w-[370px] h-[222px] bg-lightlight-blue border border-light-grey flex-col justify-center items-center gap-[21px] inline-flex">
            <div className="text-black text-xl font-normal-marianne capitalize leading-[13px]">Business Analyst</div>
            <div className="flex-col justify-center items-center flex">
                <div className="text-black text-sm font-marianne leading-[13px]"><i>C’est quoi ?</i></div>
                <div className="justify-center items-center inline-flex">
                    <div className="grow justify-center items-center inline-flex">
                        <div className="grow justify-center items-center inline-flex">
                            <img src={FicheMetier} alt='Fiche metier' className='w-[100px] h-[100px] relative flex-col justify-start items-start inline-flex'></img>
                        </div>
                    </div>
                </div>
                <div className="text-black text-sm font-normal-marianne underline">Ça m'intéresse !</div>
            </div>
        </div>
    </div>)
}

export default ButtonFicheMetierPage