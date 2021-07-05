import React, { useState, useEffect } from 'react';

import Gif from 'src/components/Gif/Gif';

import getGifs from 'src/services/getGifs.js';

import './SearchList.css';

const SearchList = ({ params }) => {
	const { keyword } = params;

	const [gifs, setGifs] = useState([]);

	const [loader, setLoader] = useState(false);

	useEffect(() => {
		getGifs({ keyword }).then((res) => setGifs(res));
	}, [keyword]);

	return (
		<div className="list-gifs">
			{gifs.map(({ id, title, url }) => (
				<Gif key={id} title={title} id={id} url={url} />
			))}
		</div>
	);
};

export default SearchList;
