import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';


import Pet from './data/pet';
import { defaultPetArray } from './data/pet';

import PetCard from './components/pet_card';
import FilterCard from './components/filter_card';

function App(): JSX.Element {

	const [speciesFilterText, setSpeciesFilterText] = useState('');
	const [favFoodFilterText, setFavFoodFilterText] = useState('');

	const [pets, setPets] = useState<Array<Pet>>(defaultPetArray);

	const [minYearFilterValue, setMinYearFilterValue] = useState(Math.min(...pets.map(pet => pet.birthYear)));
	const [maxYearFilterValue, setMaxYearFilterValue] = useState(Math.max(...pets.map(pet => pet.birthYear)));


	const filteredPetArray = pets.filter(pet =>
		pet.species.toLowerCase().includes(speciesFilterText.toLowerCase()) &&
		pet.favFoods.some(food => food.includes(favFoodFilterText)) &&
		pet.birthYear >= minYearFilterValue &&
		pet.birthYear <= maxYearFilterValue
	);


	return (
		<>
			<Navbar />
			<Header

				numberOfPets={pets.length}
				numberOfPetsDisplayed={filteredPetArray.length}
			/>

			<main>
				<FilterCard
					setSpeciesFilterText={setSpeciesFilterText}
					setFavFoodFilterText={setFavFoodFilterText}
					setMinYearFilterValue={setMinYearFilterValue}
					setMaxYearFilterValue={setMaxYearFilterValue}
					minYearFilterValue={minYearFilterValue}
					maxYearFilterValue={maxYearFilterValue}
				/>
				<div className='cards__wrapper'>{
					filteredPetArray.map((pet) => (
						<PetCard
							name={pet.name}
							species={pet.species}
							favFoods={pet.favFoods}
							birthYear={pet.birthYear}
							key={pet.key}
							id={pet.key}
						/>
					)

					)}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
