import { useState } from 'react';
import { useLocation } from 'wouter';

import ListOfGifs from 'src/components/ListOfGifs/ListOfGifs';

import useGetGifs from 'src/hooks/useGeGifs';

import './Home.css';
import TrendingSearches from 'src/components/TrendingSearches/TrendingSearches';

const Home = () => {
	const [keyword, setKeyword] = useState('');

	const [pushLocation] = useLocation();

	const { gifs } = useGetGifs();

	const handleSubmit = (e) => {
		// Navegar a otro lado
		e.preventDefault();
		pushLocation('/search/' + keyword);
	};

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};

	return (
		<div className="home">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Busca tu gif"
					onChange={handleChange}
					value={keyword}
				/>
			</form>
			<main>
				<section className="gifs__content">
					<h2>Última búsqueda</h2>
					<ListOfGifs gifs={gifs} />
				</section>
				<aside className="aside">
					<TrendingSearches />
				</aside>
			</main>
		</div>
	);
};

export default Home;
