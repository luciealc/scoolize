import React, { useState } from 'react';
import MainContentPage from './components/MainContent';
import ButtonFicheMetierPage from './components/ButtonFicheMetier';
import PopupFicheMetierPage from './components/PopupFicheMetier';
import ConseilVideoPage from './components/ConseilVideo';
import CardJpoPage from './components/CardJpo';

export interface IOrientationsPageProps { };

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps> = (props) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleInterestClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const fichemetier = [
        "Business Analyst",
        "Scrum Master",
        "Product Owner",
        "Developpeur Full Stack",
        "Chef de Projet IT",
        "Data Analyst"
    ]

    const videoUrls = [
        "https://www.youtube.com/embed/UuGFfDbPjXA?si=d9S3Hm8iZC1UToUg",
        "https://www.youtube.com/embed/byGwVMudvCI?si=jB5mD8Kn95EOw0Ty",
        "https://www.youtube.com/embed/GzroXDzzCSc?si=KOIni_QO9AKc7GSg",
        "https://www.youtube.com/embed/e4NHUBB6bos?si=kKzCMzhaI47NnIQJ",
        "https://www.youtube.com/embed/25HaTXYoj5E?si=KACZjccC2m6MH2wq",
        "https://www.youtube.com/embed/q6LZXh9y3uw?si=tHfK3xElJFw-Gfqt",
        "https://www.youtube.com/embed/deDDAlOV_5A?si=xy3OJX2jCgZVY-0V"
    ];

    const jpo = [
        { ecole: 'EDS', date: '6/01/2024', location: 'Lyon', img_url: 'https://www.epitech.digital/wp-content/uploads/2023/03/AVATAR-LOGO-EPITECH-DIGI-RS.jpg' },
        { ecole: 'IPSA', date: '21/01/2024', location: 'Toulouse', img_url: 'https://www.ipsa.fr/wp-content/uploads/IPSA_LOGO_2021_QUADRI.png' },
        { ecole: 'ISG', date: '12/01/2024', location: 'Paris', img_url: 'https://atlanticdigital.fr/visite-virtuelle/ecole/isg/lyon/assets/uploaded/20210304132220.puTaOn.png' },
        { ecole: 'Skema', date: '12/01/2024', location: 'Nice', img_url: 'https://first-education-online.com/wp-content/uploads/sites/4/2022/11/logo-skema-couleur-og-officiel.png' },
        { ecole: 'Univ Lyon', date: '21/01/2024', location: 'Lyon', img_url: 'data:image/png;base64,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' },
    ]

    const handleCardClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div>
            <MainContentPage>
                <div className="flex overflow-x-auto no-scrollbar space-x-4 py-4 px-8">
                    <ButtonFicheMetierPage onInterestClick={handleInterestClick} fichemetier={fichemetier} />
                </div>
                <div className='flex flex-row'>
                    <div className='flex-[3] overflow-y-auto ml-[50px] mt-[40px] pr-8'>
                        <ConseilVideoPage videoUrls={videoUrls} />
                    </div>
                    <div className='flex-[1] mt-[40px]'>
                        <h1 className='text-[27px] font-medium-marianne mb-3 tracking-tight'>Date JPO</h1>
                        <div className='grid grid-cols-2 gap-4 overflow-y-auto max-h-[435px]'>
                            {jpo.map((jpo, index) => (
                                <CardJpoPage
                                    key={index}
                                    ecole={jpo.ecole}
                                    date={jpo.date}
                                    location={jpo.location}
                                    img_url={jpo.img_url}
                                    onClick={() => handleCardClick('https://www.epitech.digital/inscription-journee-portes-ouvertes/?CampaignId=701Sm000003LdHeIAK')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MainContentPage>
            {showPopup &&
                <PopupFicheMetierPage onClose={handleClosePopup}>
                    <div>
                        <h1 className="text-2xl font-bold mb-4 text-center">Business Analyst</h1>
                        <p className="text-sm mb-2">
                            Le Business Analyst est un professionnel qui analyse les besoins de l'entreprise et propose des solutions pour améliorer ses processus et systèmes. Il joue un rôle crucial dans la liaison entre les départements IT et les autres services de l'entreprise.
                        </p>
                        <h2 className="text-xl font-semibold mb-2">Responsabilités principales :</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Étudier les processus d'affaires et proposer des améliorations.</li>
                            <li>Collaborer avec les équipes IT pour développer et implémenter des solutions.</li>
                            <li>Réaliser des analyses de données pour soutenir les décisions stratégiques.</li>
                        </ul>
                        <h2 className="text-xl font-semibold mb-2">Compétences requises :</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Excellentes capacités analytiques et de résolution de problèmes.</li>
                            <li>Compétences en communication et en présentation.</li>
                            <li>Connaissances en informatique et en analyse de données.</li>
                        </ul>
                        <h2 className="text-xl font-semibold mb-2">Formation et Expérience :</h2>
                        <p className="text-sm">
                            Un diplôme en gestion d'entreprise, en informatique ou dans un domaine connexe est souvent requis. Une expérience dans l'analyse de processus d'affaires ou dans un rôle similaire est préférable.
                        </p>
                    </div>
                </PopupFicheMetierPage>
            }
        </div>
    )
}

export default OrientationsPage;