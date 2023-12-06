import React, { useState } from 'react';

export interface ISearchBarPageProps { };

const SearchBarPage: React.FunctionComponent<ISearchBarPageProps> = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement your search logic here
        console.log(`Searching for: ${searchTerm}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (<div>
        <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className="flex items-center border-b-2 border-dark-blue">
                <input
                    type="text"
                    placeholder="Ex: BTS Droit Lyon"
                    value={searchTerm}
                    onChange={handleChange}
                    className="px-4 py-2 w-96 font-marianne bg-light-grey text-black-ish text-neutral-900 text-base rounded-tl"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 bg-dark-blue hover:bg-light-blue font-marianne rounded-tr text-base font-normal"
                >
                    Rechercher
                </button>
            </form>
        </div>
    </div>)
}

export default SearchBarPage