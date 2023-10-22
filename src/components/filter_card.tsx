export interface FilterCardProps {
    setSpeciesFilterText: (speciesFilter: string) => void;
    setFavFoodFilterText: (favFoodFilter: string) => void;
    setMinYearFilterValue: (minYearFilter: number) => void;
    setMaxYearFilterValue: (maxnYearFilter: number) => void;
    minYearFilterValue: number;
    maxYearFilterValue: number;
}

const FilterCard: React.FC<FilterCardProps> = ({ setSpeciesFilterText, setFavFoodFilterText, setMinYearFilterValue, setMaxYearFilterValue, minYearFilterValue, maxYearFilterValue }) => {


    const setMinBirthYear = (minYearText: string) => {
        const value = Number(minYearText);
        if (!isNaN(value))
            setMinYearFilterValue(value);
    };

    const setMaxBirthYear = (maxYearText: string) => {
        const value = Number(maxYearText);
        if (!isNaN(value))
            setMaxYearFilterValue(value);
    };


    return <form className="header__container">
        <fieldset>
            <legend>Filters</legend>

            <label className="card__text">Species:</label>
            <input type="text" value='' className="card_test" placeholder="type all or part of a species name here"
                onChange={(event) => setSpeciesFilterText(event.target.value)} />


            <label className="card__text">Favourite Food(s):</label>
            <input type="text" value='' className="card_test" placeholder="type all or part a food type here"
                onChange={(event) => setFavFoodFilterText(event.target.value)} />


            <label className="card__text">Minimum Birth Year:</label>
            <input type="number" step="1" min="1900" max="3000" className="card_test" value={minYearFilterValue} placeholder="type min birth year here"
                onChange={(event) => setMinBirthYear(event.target.value)} />


            <label className="card__text">Maximum Birth Year:</label>
            <input type="number" step="1" min="1900" max="3000" className="card_test" value={maxYearFilterValue} placeholder="type max birth year here"
                onChange={(event) => setMaxBirthYear(event.target.value)} />

            {/* <button onClick={event => resetFilters()}>reset filters</button> */}

        </fieldset>
    </form >;

};

export default FilterCard;