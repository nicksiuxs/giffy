import { useState } from 'react';
import { Link, useLocation } from 'wouter';

import ListOfGifs from 'src/components/ListOfGifs/ListOfGifs';

import useGetGifs from 'src/hooks/useGeGifs';

import './Home.css';

const POPULAR_GIFS = ['Pandas', 'Colombia', 'Argentina'];

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
			<h2>Última búsqueda</h2>
			<ListOfGifs gifs={gifs} />
			<h2>Los gifs más populares</h2>
			<ul>
				{POPULAR_GIFS.map((route, key) => {
					return (
						<li key={key}>
							<Link to={'/search/' + route}>GIF de {route}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
