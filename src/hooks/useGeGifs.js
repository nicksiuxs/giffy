import { useState, useEffect } from 'react';
import getGifs from 'src/services/getGifs.js';

export default function useGetGifs({ keyword }) {
	const [gifs, setGifs] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword }).then((res) => {
			setGifs(res);
			setLoading(false);
		});
	}, [keyword]);

	return { loading, gifs };
}
