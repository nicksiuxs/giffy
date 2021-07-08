import { useContext, useState, useEffect } from 'react';
import getGifs from 'src/services/getGifs.js';
import GifsContext from 'src/context/GifsContext';

export default function useGetGifs({ keyword } = { keyword: null }) {
	const { gifs, setGifs } = useContext(GifsContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		// recuperamos la última palabra del localstorage
		const keywordToUse =
			keyword || localStorage.getItem('lastKeyword') || 'random';
		getGifs({ keyword: keywordToUse }).then((res) => {
			setGifs(res);
			setLoading(false);
			// Guardamos la última palabra buscada
			localStorage.setItem('lastKeyword', keyword);
		});
	}, [keyword]);

	return { loading, gifs };
}
