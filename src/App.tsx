import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';


import Cat from './data/cat';
import { defaultCatArray } from './data/cat';

import CatCard from './components/cat_card';

function App(): JSX.Element {

	const [cats, setCats] = useState<Array<Cat>>(defaultCatArray);
	return (
		<>
			<Navbar />
			<Header
				numberOfCats={cats.length}
			/>

			<main>
				<div className='cards__wrapper'>{cats.map((cat) =>

				(
					<CatCard
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						key={cat.key}
						id={cat.key}
					/>

				)

				)}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
