import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PredictLogo from "../../../assets/logos/predict.webp"

export interface INavbarPageProps { }

const NavbarPage: React.FunctionComponent<INavbarPageProps> = (props) => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path
    }

    const linkClass = (path: string) => {
        return isActive(path) ? 'border-b-2 border-dark-blue' : '';
    }

    return (
        <div className="fixed top-0 left-0 h-full w-[321px] bg-white shadow-lg flex flex-col justify-between">
            <nav className="flex flex-col">
                <div className="p-2.5 flex justify-center mt-[51px] mb-[50px]">
                    <Link to="/">
                        <img src={PredictLogo} alt="Predict" className="h-[73px] w-[272px]" />
                    </Link>
                </div>
                <ul className="w-[151px] h-[370px] pl-[15px] pb-[372px] flex-col justify-start items-start gap-8 inline-flex">
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/')}`}>Accueil</Link>
                    </li>
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/formations" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/formations')}`}>Formations</Link>
                    </li>
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/orientation" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/orientation')}`}>Orientation</Link>
                    </li>
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/voeux" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/voeux')}`}>Voeux</Link>
                    </li>
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/messagerie" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/messagerie')}`}>Messagerie</Link>
                    </li>
                    <li className='pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex'>
                        <Link to="/profil" className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass('/profil')}`}>Profil</Link>
                    </li>
                </ul>
            </nav>
            <div className="w-[135px] h-[38px] px-4 py-2 bg-dark-red hover:bg-light-red justify-center items-center gap-2.5 inline-flex mb-[40px] self-end mr-[15px]">
                <button className="text-white text-base font-normal font-marianne">Deconnexion</button>
            </div>
        </div>
    );
}

export default NavbarPage;