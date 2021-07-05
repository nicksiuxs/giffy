import React, { useState, useEffect } from 'react';

import Gif from 'src/components/Gif/Gif';
import Loader from 'src/components/Loader/Loader';

import getGifs from 'src/services/getGifs.js';

import './SearchList.css';

const SearchList = ({ params }) => {
	const { keyword } = params;

	const [gifs, setGifs] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword }).then((res) => {
			setGifs(res);
			setLoading(false);
		});
	}, [keyword]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="list-gifs">
					{gifs.map(({ id, title, url }) => (
						<Gif key={id} title={title} id={id} url={url} />
					))}
				</div>
			)}
		</>
	);
};

export default SearchList;
