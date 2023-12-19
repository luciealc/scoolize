import React, { useState, useEffect } from "react";
import MainContentPage from "../components/MainContent";
import SearchBarPage from "./components/SearchBar";
import FormationFilterPage from "./components/FormationFilter";
import CardFormationPage from "./components/CardFormation";
import MapFormationPage from "./components/MapFormation";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../auth/firebaseConfig";
import FicheFormationPopupPage from "./components/FicheFormationPopup";

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
}

export interface IFormationsPageProps {}

const FormationsPage: React.FunctionComponent<IFormationsPageProps> = (
    props
) => {
    const [formations, setFormations] = useState<Formation[]>([]);
    const [isFormationPopupOpen, setIsFormationPopupOpen] = useState(false);
    // const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(null);

    const openFormationPopup = () => {
        setIsFormationPopupOpen(true);
    };

    const closeFormationPopup = () => {
        setIsFormationPopupOpen(false);
    };

    // const handleChatButtonClick = async (formationId: string | null) => {
    //     if (formationId) {
    //         const selectedFormation = formations.find(
    //             (formation) => formation.id === formationId
    //         );

    //         if (selectedFormation) {
    //             await createChat(selectedFormation.ecole, selectedFormation.id);
    //         }
    //     }
    //     console.log('conversation created successfully')
    // };

    useEffect(() => {
        const fetchData = async () => {
            const formationsCollection = collection(firestore, "formations");
            const formationsSnapshot = await getDocs(formationsCollection);
            const formationsList: Formation[] = formationsSnapshot.docs.map((doc) => {
                const data = doc.data();
                // console.log(data);
                return {
                    id: doc.id,
                    contrat: data.contrat,
                    ecole: data.ecole,
                    formation: data.formation,
                    link: data.link,
                    localisation: data.localisation,
                    nb_places: data.nb_places,
                    resume: data.resume,
                    taux_acces: data.taux_acces,
                    tags: data.tags,
                };
            });
            setFormations(formationsList);
        };
        fetchData();
    }, []);

    return (
        <MainContentPage>
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                    <SearchBarPage />
                    <FormationFilterPage />
                </div>
                <div className="flex flex-wrap mx-2">
                    <div className="w-full lg:w-1/2 px-2 mb-4">
                        <div className="w-[191px] h-[34px] text-black text-[32px] font-medium-marianne leading-tight">
                            Proposition
                        </div>
                        <div
                            className="overflow-y-auto mt-2 mb-2 ml-2 mr-2 p-2 rounded-lg"
                            style={{ maxHeight: "700px" }}
                        >
                            {formations.map((formation) => (
                                <CardFormationPage
                                    key={formation.id}
                                    data={formation}
                                    onButtonClick={openFormationPopup}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-2 h-full">
                        <div className="w-[191px] h-[34px] text-black text-[32px] font-medium-marianne leading-tight">
                            Carte
                        </div>
                        <MapFormationPage />
                    </div>
                </div>
            </div>
            {isFormationPopupOpen && (
                <FicheFormationPopupPage onClose={closeFormationPopup}>
                    <div>
                        <h1>Hello hello</h1>
                        {/* <h1>{formations.ecole}</h1> */}
                        <button className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne">Commencer une conversation</button>
                    </div>
                </FicheFormationPopupPage>
            )}
        </MainContentPage>
    );
};

export default FormationsPage;